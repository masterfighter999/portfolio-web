import React from 'react';
import { Database, Cloud, Box, Cpu, Globe } from 'lucide-react';

const TechBar = () => {
    const technologies = [
        { name: 'Java Spring Boot', icon: <Cpu size={24} /> },
        { name: 'Apache Kafka', icon: <Share2Icon /> }, // Custom icon below
        { name: 'Docker', icon: <Box size={24} /> },
        { name: 'PostgreSQL', icon: <Database size={24} /> },
        { name: 'AWS Cloud', icon: <Cloud size={24} /> },
    ];

    return (
        <section className="py-10 flex justify-center">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex items-center gap-2 group cursor-default"
                    >
                        {/* Icon placeholder - using Lucide or custom SVG */}
                        <span className="text-gray-500 group-hover:text-white transition-colors duration-300">
                            {tech.icon}
                        </span>
                        <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-600 group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Simple custom component for a "Connect/Share" icon representing Kafka
const Share2Icon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
)

export default TechBar;
