import React from 'react';
import { ArrowRight, Server, Database, Share2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">

            {/* Background Graphic: Glowing Data Lines */}
            {/* This SVG mimics the 'distributed nodes' background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="30%" stopColor="#a855f7" />
                            <stop offset="70%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    {/* Curved connecting lines */}
                    <path d="M100,600 Q300,300 500,400 T900,200" fill="none" stroke="url(#lineGradient)" strokeWidth="1" />
                    <path d="M-50,400 Q200,500 400,300 T850,550" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6" />
                    <path d="M200,800 Q400,500 600,600 T1000,300" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />

                    {/* Floating animated glowing orbs */}
                    <circle cx="100" cy="600" r="3" fill="#f97316" className="animate-pulse" />
                    <circle cx="500" cy="400" r="4" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <circle cx="900" cy="200" r="3" fill="#f97316" className="animate-pulse" style={{ animationDelay: '2s' }} />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/10 mb-4 animate-float bg-black/40 backdrop-blur-md">
                    <Server size={14} className="text-orange-400" />
                    <span className="text-xs uppercase tracking-widest text-orange-200 font-semibold">Software Developer</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="block text-white mb-2 text-glow mix-blend-screen">Swayam Chatterjee</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 text-glow">Software Developer</span>
                </h1>

                {/* Subheader */}
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Specializing in <span className="text-orange-400 font-medium">Microservices</span>,{' '}
                    <span className="text-purple-400 font-medium">Kafka Event Streams</span>, and{' '}
                    <span className="text-orange-400 font-medium">Cloud Native Solutions</span>.
                    Building robust systems that scale with your vision.
                </p>

                {/* CTA Button */}
                <div className="pt-8">
                    <button className="group relative px-8 py-4 bg-secondary rounded-full text-white font-semibold flex items-center gap-3 mx-auto overflow-hidden transition-all duration-300 hover:scale-105 btn-glow-orange active:scale-95">
                        <span className="relative z-10">View Architecture</span>
                        <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>

            </div>

            {/* Decorative Blur Effects for Atmosphere */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[128px] pointer-events-none" />

        </section>
    );
};

export default Hero;
