import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#050505] pointer-events-none">
            {/* Primary Purple Blob */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            {/* Secondary Orange Blob */}
            <motion.div
                className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Bottom Left Blue/Purple Mix */}
            <motion.div
                className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5,
                }}
            />

            {/* Bottom Right Subtle Glow */}
            <motion.div
                className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px]"
                animate={{
                    x: [0, -50, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 8,
                }}
            />

            {/* Extra Primary Purple Blob - Top Left Trajectory */}
            <motion.div
                className="absolute top-[5%] left-[15%] w-[400px] h-[400px] bg-primary/25 rounded-full mix-blend-screen filter blur-[80px]"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Extra Secondary Orange Blob - Top Right Trajectory */}
            <motion.div
                className="absolute top-[15%] right-[20%] w-[350px] h-[350px] bg-secondary/25 rounded-full mix-blend-screen filter blur-[80px]"
                animate={{
                    x: [0, 80, 0],
                    y: [0, -70, 0],
                    scale: [1, 1.25, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 3,
                }}
            />

            {/* Twinkling Orange Dots (Stars) */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute w-1 h-1 bg-secondary rounded-full"
                    initial={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.2,
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Shooting Stars */}
            {/* Shooting Stars */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`shooting-star-${i}`}
                    className="absolute w-[150px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.4)',
                    }}
                    initial={{
                        top: Math.random() * -100 + "px", // Start above screen
                        left: Math.random() * 100 + "%", // Random horizontal start
                        rotate: 45, // Rotated 45 degrees towards bottom-right
                    }}
                    animate={{
                        top: "120%", // Move to bottom
                        left: [null, `${Math.random() * 100 + 40}%`], // Move significantly to right
                        opacity: [0, 1, 0], // Fade in/out
                    }}
                    transition={{
                        duration: 1.5 + Math.random() * 2, // Random speed
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                        repeatDelay: Math.random() * 10,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundAnimation;
