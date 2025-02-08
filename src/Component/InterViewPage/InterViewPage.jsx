import { useEffect, useRef, useState } from 'react';
import Orb from '../Orb/Orb.jsx';

export default function InterViewPage() {
    const videoRef = useRef(null); // Reference for the video element
    const [currentQuestion, setCurrentQuestion] = useState(
        "Hello! I am micro1’s AI interviewer. Welcome, I’m excited to get to know you. Could you briefly introduce yourself?"
    );
    const [topic, setTopic] = useState("Self-Introduction"); // Topic for the question
    const [timeLeft, setTimeLeft] = useState(25 * 60); // Timer in seconds (25 minutes)
    const [isTimerRunning, setIsTimerRunning] = useState(false); // Controls whether the timer is running
    const [isInterviewStarted, setIsInterviewStarted] = useState(false); // Controls whether the interview has started

    // Start the camera stream when the component mounts
    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();

        // Cleanup function to stop the camera stream when the component unmounts
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Timer logic
    useEffect(() => {
        if (!isTimerRunning || timeLeft <= 0) return;

        const timerInterval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // Cleanup interval when the component unmounts or timer stops
        return () => clearInterval(timerInterval);
    }, [isTimerRunning, timeLeft]);

    // Format the time (MM:SS)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Start the interview
    const startInterview = () => {
        setIsInterviewStarted(true);
        setIsTimerRunning(true); // Start the timer
    };

    // Reset the interview state
    const resetInterview = () => {
        setIsInterviewStarted(false);
        setIsTimerRunning(false); // Stop the timer
        setTimeLeft(25 * 60); // Reset timer to 25 minutes
    };

    return (
        <div className="bg-violet-200 h-screen flex flex-col items-center justify-center relative">
            {/* Header */}
            <div className="w-full absolute top-0 p-4  text-violet-900 flex justify-between items-center shadow-sm">
                <div className="text-3xl font-bold">AppName.</div>
                <div className="text-2xl font-bold">{topic}</div>
                <div className="text-xl font-bold bg-white p-2 rounded-lg text-violet-900">
                    {formatTime(timeLeft)}
                </div>
            </div>

            {/* Dynamic Question with White Background */}
            <div className="absolute top-32 bg-white p-6 rounded-lg shadow-md max-w-2xl text-center">
                <p className="text-xl text-gray-800 font-medium">{currentQuestion}</p>
            </div>

            {/* Orb centered in the middle with hover effect */}
            <div className="w-64 h-64 flex items-center justify-center hover:scale-110 transition-transform duration-300 mt-16">
                <Orb hoverIntensity={0.5} rotateOnHover={true} hue={13} forceHoverState={true} />
            </div>

            {/* Start Interview Button (only shown if interview hasn't started) */}
            {!isInterviewStarted && (
                <button
                    onClick={startInterview}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-300 transition"
                >
                    Start Answering
                </button>
            )}

            {/* Recording indicator (only shown if interview has started) */}
            {isInterviewStarted && (
                <div className="mt-4 py-2 px-6 bg-gray-300 text-gray-700 font-semibold rounded-lg">Recording...</div>
            )}

            {/* Done answering button (only shown if interview has started) */}
            {isInterviewStarted && (
                <button
                    onClick={resetInterview}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                >
                    Done answering? Continue
                </button>
            )}

            {/* Live Camera Feed */}
            <div className="absolute bottom-6 left-6 w-120 h-70 bg-black rounded-lg overflow-hidden shadow-lg">
                <video ref={videoRef} autoPlay muted className="w-full h-full object-cover"></video>
            </div>

            {/* Support Email */}
            <div className="absolute bottom-4 text-sm text-gray-600">Need help? email <span className="text-blue-600">support@micro1.ai</span></div>
        </div>
    );
}