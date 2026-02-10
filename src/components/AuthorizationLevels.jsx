import React, { useRef } from 'react';
import { Brain, Network, Hexagon, ShieldCheck } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const BadgeCard = ({ badge, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform
            }}
            className={`
                relative w-full max-w-[320px] h-[480px] 
                rounded-xl border ${badge.borderColor}
                bg-glass-card backdrop-blur-xl
                flex flex-col items-center justify-between p-6
                group
                shadow-[0_0_15px_rgba(0,0,0,0.5)]
                hover:${badge.shadowColor}
                hover:shadow-[0_0_30px_rgba(var(--glow-rgb),0.3)]
            `}
        >
            {/* Holographic rim light effect */}
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className={`absolute inset-0 rounded-xl bg-gradient-to-b ${badge.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
            />

            {/* Scanline effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-10">
                <div className="w-full h-[200%] bg-gradient-to-b from-transparent via-white to-transparent animate-scanline" />
            </div>

            {/* Header / ID Hole */}
            <div
                style={{ transform: "translateZ(40px)" }}
                className="w-full flex justify-between items-start z-10"
            >
                <div className="h-2 w-16 bg-white/20 rounded-full" />
                <ShieldCheck className={`w-6 h-6 ${badge.textColor}`} />
            </div>

            {/* Icon Section */}
            <div
                style={{ transform: "translateZ(60px)" }}
                className="relative z-10 flex items-center justify-center py-8"
            >
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
            <div
                style={{ transform: "translateZ(40px)" }}
                className="text-center z-10 w-full space-y-2"
            >
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                    {badge.title}
                </h3>
                <p className={`text-sm ${badge.textColor} font-mono tracking-wider`}>
                    {badge.subtitle}
                </p>
            </div>

            {/* Footer Status */}
            <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transform: "translateZ(30px)" }}
                className={`
                mt-6 py-2 px-8 rounded-full 
                border ${badge.borderColor} bg-black/40
                text-sm font-bold tracking-[0.2em]
                ${badge.textColor} uppercase
                shadow-[0_0_15px_inset] ${badge.shadowColor}
                hover:bg-white/10 transition-colors cursor-pointer
            `}>
                {badge.status}
            </a>
        </motion.div>
    );
};

const AuthorizationLevels = () => {
    const badges = [
        {
            id: 1,
            title: "Oracle Cloud Infrastructure 2025",
            subtitle: "Certified Generative AI Professional",
            glowColor: "cyan", // Cyan / Electric Blue
            icon: Brain,
            status: "VERIFIED",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4EEA6E9D80BF6FA0689B2B8C4A6BB481339A85529282D72E69355D901694D2ED",
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
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BEFBBE6309F67FB277FBB3BB979CB27E5FE49DB0BA45C70FB5B81B0BDA4176F0",
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
            link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68d2500f3531e46c2424bd38_1758636422880_completion_certificate.pdf",
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
                        <BadgeCard key={badge.id} badge={badge} index={index} />
                    ))}
                </div>
            </div>

            {/* Styles moved to index.css */}
        </section>
    );
};

export default AuthorizationLevels;
