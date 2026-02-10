import React from 'react';
import { Brain, Network, Hexagon, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthorizationLevels = () => {
    const badges = [
        {
            id: 1,
            title: "Oracle Cloud Infrastructure 2025",
            subtitle: "Certified Generative AI Professional",
            glowColor: "cyan", // Cyan / Electric Blue
            icon: Brain,
            status: "VERIFIED",
            borderColor: "border-cyan-500/50",
            shadowColor: "shadow-cyan-500/50",
            textColor: "text-cyan-400",
            bgGradient: "from-cyan-500/10 to-transparent"
        },
        {
            id: 2,
            title: "Oracle Cloud Infrastructure 2025",
            subtitle: "Certified Data Science Professional",
            glowColor: "amber", // Amber / Gold
            icon: Network,
            status: "VERIFIED",
            borderColor: "border-amber-500/50",
            shadowColor: "shadow-amber-500/50",
            textColor: "text-amber-400",
            bgGradient: "from-amber-500/10 to-transparent"
        },
        {
            id: 3,
            title: "AWS APAC Solutions",
            subtitle: "Solutions Architecture Experience",
            glowColor: "orange", // AWS Orange
            icon: Hexagon,
            status: "COMPLETED",
            borderColor: "border-orange-500/50",
            shadowColor: "shadow-orange-500/50",
            textColor: "text-orange-400",
            bgGradient: "from-orange-500/10 to-transparent"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                            Authorization Levels
                        </span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        High-level certifications and technical credentials.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                                relative w-full max-w-[320px] h-[480px] 
                                rounded-xl border ${badge.borderColor}
                                bg-glass-card backdrop-blur-xl
                                flex flex-col items-center justify-between p-6
                                transition-all duration-300 hover:scale-105
                                group
                                shadow-[0_0_15px_rgba(0,0,0,0.5)]
                                hover:${badge.shadowColor}
                                hover:shadow-[0_0_30px_rgba(var(--glow-rgb),0.3)]
                            `}
                            style={{
                                boxShadow: `0 0 20px ${badge.glowColor === 'cyan' ? 'rgba(6,182,212,0.1)' : badge.glowColor === 'amber' ? 'rgba(245,158,11,0.1)' : 'rgba(249,115,22,0.1)'}`
                            }}
                        >
                            {/* Holographic rim light effect */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${badge.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

                            {/* Scanline effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-10">
                                <div className="w-full h-[200%] bg-gradient-to-b from-transparent via-white to-transparent animate-scanline" />
                            </div>

                            {/* Header / ID Hole */}
                            <div className="w-full flex justify-between items-start z-10">
                                <div className="h-2 w-16 bg-white/20 rounded-full" />
                                <ShieldCheck className={`w-6 h-6 ${badge.textColor}`} />
                            </div>

                            {/* Icon Section */}
                            <div className="relative z-10 flex items-center justify-center py-8">
                                <div className={`
                                    relative w-32 h-32 rounded-full 
                                    flex items-center justify-center
                                    border-2 ${badge.borderColor}
                                    bg-black/50
                                    shadow-[0_0_30px_inset] ${badge.shadowColor}
                                `}>
                                    <badge.icon
                                        size={64}
                                        className={`${badge.textColor} drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                                        strokeWidth={1.5}
                                    />

                                    {/* Rotating Ring */}
                                    <div className={`absolute inset-0 rounded-full border-t-2 ${badge.borderColor} animate-spin-slow opacity-70`} />
                                    <div className={`absolute -inset-2 rounded-full border-b-2 ${badge.borderColor} animate-reverse-spin opacity-50`} />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center z-10 w-full space-y-2">
                                <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                                    {badge.title}
                                </h3>
                                <p className={`text-sm ${badge.textColor} font-mono tracking-wider`}>
                                    {badge.subtitle}
                                </p>
                            </div>

                            {/* Footer Status */}
                            <div className={`
                                mt-6 py-2 px-8 rounded-full 
                                border ${badge.borderColor} bg-black/40
                                text-sm font-bold tracking-[0.2em]
                                ${badge.textColor} uppercase
                                shadow-[0_0_15px_inset] ${badge.shadowColor}
                            `}>
                                {badge.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Styles moved to index.css */}
        </section>
    );
};

export default AuthorizationLevels;
