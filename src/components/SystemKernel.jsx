import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Terminal, Code, MapPin, Calendar, Server } from 'lucide-react';

const SystemKernel = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                        <Terminal className="text-green-500" size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-mono text-green-400 tracking-tight">
                            System Kernel
                        </h2>
                        <p className="text-green-500/60 font-mono text-sm">
                            {'>'} Initializing education modules...
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">

                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[2px] bg-green-500/30 z-0">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    {/* Master Node (Jadavpur) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                        <div className="relative h-full bg-[#0a0a0a] rounded-xl border border-green-500/20 p-8 overflow-hidden">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            {/* Header */}
                            <div className="flex justify-between items-start mb-8 relative">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                        <GraduationCap className="text-green-400" size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-green-500/60 mb-1">MASTER_NODE</div>
                                        <h3 className="text-xl font-bold text-white">Jadavpur University</h3>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-xs text-green-400 font-mono animate-pulse">
                                    ACTIVE
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 font-mono text-sm relative">
                                <div className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-green-500/20 transition-colors">
                                    <Server className="text-green-500 mt-0.5" size={16} />
                                    <div>
                                        <div className="text-gray-400 text-xs">Degree</div>
                                        <div className="text-green-100">Master of Computer Applications (MCA)</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <Calendar className="text-green-500" size={16} />
                                        <div>
                                            <div className="text-gray-400 text-xs">Period</div>
                                            <div className="text-green-100">2024 - Present</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <MapPin className="text-green-500" size={16} />
                                        <div>
                                            <div className="text-gray-400 text-xs">Location</div>
                                            <div className="text-green-100">Kolkata, IN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decor */}
                            <div className="absolute bottom-4 right-4 text-[10px] text-green-500/20 font-mono">
                                ID: JU_MCA_24
                            </div>
                        </div>
                    </motion.div>

                    {/* Base Node (Visva-Bharati) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                        <div className="relative h-full bg-[#0a0a0a] rounded-xl border border-blue-500/20 p-8 overflow-hidden">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            {/* Header */}
                            <div className="flex justify-between items-start mb-8 relative">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                        <Book className="text-blue-400" size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-blue-500/60 mb-1">BASE_NODE</div>
                                        <h3 className="text-xl font-bold text-white">Visva-Bharati University</h3>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-mono">
                                    ARCHIVED
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 font-mono text-sm relative">
                                <div className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                                    <Code className="text-blue-500 mt-0.5" size={16} />
                                    <div>
                                        <div className="text-gray-400 text-xs">Degree</div>
                                        <div className="text-blue-100">Bachelor of Computer Science</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <Calendar className="text-blue-500" size={16} />
                                        <div>
                                            <div className="text-gray-400 text-xs">Period</div>
                                            <div className="text-blue-100">2021 - 2024</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <MapPin className="text-blue-500" size={16} />
                                        <div>
                                            <div className="text-gray-400 text-xs">Location</div>
                                            <div className="text-blue-100">Santiniketan, IN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decor */}
                            <div className="absolute bottom-4 right-4 text-[10px] text-blue-500/20 font-mono">
                                ID: VBU_BCS_21
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SystemKernel;
