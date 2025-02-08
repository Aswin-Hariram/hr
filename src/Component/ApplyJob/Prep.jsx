import React, { useEffect, useRef, useState } from "react";
import { Container, Typography, Paper, Button, Box, Checkbox, CircularProgress, Select, MenuItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useLocation, useNavigate } from "react-router-dom";

function Prep() {
    const location = useLocation();
    const navigate = useNavigate();
    const skills = location.state?.skills || [];
    const videoRef = useRef(null);
    const [cameraAccess, setCameraAccess] = useState(null);
    const [micAccess, setMicAccess] = useState(null);
    const [micTestStarted, setMicTestStarted] = useState(false);
    const [micVolume, setMicVolume] = useState(0);
    const [termsChecked, setTermsChecked] = useState(false);
    const [testing, setTesting] = useState(false);
    const [micTestSuccess, setMicTestSuccess] = useState(false);
    const [cameraTestSuccess, setCameraTestSuccess] = useState(false);

    useEffect(() => {
        async function checkPermissions() {
            try {
                console.log(skills);
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                if (stream.getVideoTracks().length > 0) {
                    setCameraAccess(true);
                    setCameraTestSuccess(true);
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                } else {
                    setCameraAccess(false);
                    setCameraTestSuccess(false);
                }

                if (stream.getAudioTracks().length > 0) {
                    setMicAccess(true);
                } else {
                    setMicAccess(false);
                }
            } catch (error) {
                setCameraAccess(false);
                setMicAccess(false);
                setCameraTestSuccess(false);
            }
        }
        checkPermissions();
    }, []);

    const startMicTest = async () => {
        try {
            setTesting(true);
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            microphone.connect(analyser);
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            setMicTestStarted(true);
            let elapsedTime = 0;
            const testDuration = 10;
            const startTime = Date.now();

            const updateVolume = () => {
                analyser.getByteFrequencyData(dataArray);
                let sum = dataArray.reduce((a, b) => a + b, 0);
                let average = sum / bufferLength;
                setMicVolume(Math.min(average, 100));
                elapsedTime = (Date.now() - startTime) / 1000;

                if (elapsedTime < testDuration) {
                    requestAnimationFrame(updateVolume);
                } else {
                    setTesting(false);
                    setMicTestStarted(false);
                    setMicTestSuccess(true);
                    stream.getTracks().forEach(track => track.stop());
                }
            };
            updateVolume();
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const isReadyToStart = cameraTestSuccess && micTestSuccess && termsChecked;

    const handleStartTest = () => {
        if (isReadyToStart) {
            navigate("/StartTest", { state: { skills } });
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, textAlign: "center", bgcolor: "#f4f3ff", p: 4, borderRadius: 2 }}>
            <Typography variant="h4" fontWeight="bold">Check camera, mic, and share screen</Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
                We use audio, video, and screen sharing to generate an accurate assessment & proctoring score.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: "white", display: "flex", gap: 3, justifyContent: "space-between" }}>
                <Box>
                    <Select fullWidth defaultValue="FaceTime HD Camera">
                        <MenuItem value="FaceTime HD Camera">FaceTime HD Camera</MenuItem>
                    </Select>
                    <Box sx={{ mt: 2, width: 320, height: 240, borderRadius: 2, border: "1px solid #ddd" }}>
                        {cameraAccess === null ? (
                            <CircularProgress />
                        ) : cameraAccess ? (
                            <video ref={videoRef} autoPlay playsInline width="320" height="240" />
                        ) : (
                            <Typography color="error"><ErrorIcon /> Camera access denied</Typography>
                        )}
                    </Box>
                </Box>

                <Box>
                    <Select fullWidth defaultValue="Default - AirPods">
                        <MenuItem value="Default - AirPods">Default - AirPods</MenuItem>
                    </Select>
                    <Box sx={{ mt: 2, p: 2, bgcolor: "#f4f4f4", borderRadius: 2 }}>
                        <Typography fontWeight="bold">Speak and pause to check your microphone.</Typography>
                        <Box sx={{ height: 20, bgcolor: "#ddd", borderRadius: 2, mt: 1, position: "relative" }}>
                            <Box sx={{ width: `${micVolume}%`, height: "100%", bgcolor: "blue", borderRadius: 2 }}></Box>
                        </Box>
                        <Button variant="contained" sx={{ mt: 2 }} onClick={startMicTest} disabled={testing}>
                            {testing ? "Testing..." : "Speak"}
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <Checkbox checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)} />
                <Typography component="span">I agree to the <a href="#">terms & conditions</a> of this AI interview process.</Typography>
            </Box>
            <Button
                variant="contained"
                sx={{ mt: 3, bgcolor: isReadyToStart ? "#1976d2" : "#aaa" }}
                disabled={!isReadyToStart}
                onClick={handleStartTest}
            >
                Share screen and start the interview
            </Button>
        </Container>
    );
}

export default Prep;
