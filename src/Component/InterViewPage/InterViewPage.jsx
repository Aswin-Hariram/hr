import { useEffect, useRef } from 'react';
import Orb from '../Orb/Orb.jsx';

export default function InterViewPage() {
    const videoRef = useRef(null); // Reference for the video element

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

    return (
        <div className="bg-violet-200 h-screen flex flex-col items-center justify-center relative">
            {/* AppName at the top-left corner */}
            <div className="text-3xl font-bold text-violet-900 absolute top-6 left-6">micro1.</div>

            {/* Timer at the top-right corner */}
            <div className="text-xl font-bold text-violet-900 absolute top-6 right-6">2:38</div>

            {/* Warning message */}
            <div className="absolute top-16 bg-red-200 text-red-800 px-4 py-2 rounded-lg font-semibold">
                You have limited time. Please complete your answer quickly.
            </div>

            {/* Orb centered in the middle with hover effect */}
            <div className="w-64 h-64 flex items-center justify-center hover:scale-110 transition-transform duration-300 mt-16">
                <Orb hoverIntensity={0.5} rotateOnHover={true} hue={13} forceHoverState={true} />
            </div>

            {/* Interview question text */}
            <div className="text-xl text-center font-medium text-violet-900 mt-6 max-w-xl">
                Hello! I am micro1’s AI interviewer. Welcome, I’m excited to get to know you. Could you briefly introduce yourself?
            </div>

            {/* Recording indicator */}
            <div className="mt-4 py-2 px-6 bg-gray-300 text-gray-700 font-semibold rounded-lg">Recording...</div>

            {/* Done answering button */}
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Done answering? Continue
            </button>

            {/* Live Camera Feed */}
            <div className="absolute bottom-6 left-6 w-60 h-50 bg-black rounded-lg overflow-hidden shadow-lg">
                <video ref={videoRef} autoPlay muted className="w-full h-full object-cover"></video>
            </div>

            {/* Support Email */}
            <div className="absolute bottom-4 text-sm text-gray-600">Need help? email <span className="text-blue-600">support@micro1.ai</span></div>
        </div>
    );
}
