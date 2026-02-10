import React from 'react';
import { Play, TrendingUp, Shield, Activity, GitBranch } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 relative z-10">

            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-purple-400">Deployments</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    High-performance systems built for scale.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">

                {/* Card A: Ticket Booking System */}
                <div className="glass-panel p-8 rounded-3xl relative group transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] border-l-4 border-l-orange-500/50">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-2">
                                <Activity size={12} className="text-orange-400" />
                                <span className="text-xs font-medium text-orange-300">Microservices Orchestration</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Event-Driven Booking</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <GitBranch size={20} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Visualization: Kafka Stream */}
                    <div className="bg-black/40 rounded-xl p-4 mb-6 border border-white/5 font-mono text-xs text-gray-400 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-2">
                            <span>Stream Status:</span>
                            <span className="text-green-400 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Active
                            </span>
                        </div>

                        {/* Simulated Stream Animation */}
                        <div className="h-10 flex gap-2 overflow-hidden items-center">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-6 min-w-[30px] bg-orange-500/20 rounded border border-orange-500/30 flex items-center justify-center text-[8px] animate-slide-left" style={{ animationDelay: `${i * 0.5}s` }}>
                                    EVT
                                </div>
                            ))}
                        </div>
                        <p className="mt-2 text-gray-500">Processing asynchronous workflows... Zero downtime.</p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-auto">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                            <Play size={16} fill="currentColor" /> View GitHub Repo
                        </button>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600/20 blur-[80px] pointer-events-none group-hover:bg-orange-600/30 transition-all" />
                </div>

                {/* Card B: Library Management */}
                <div className="glass-panel p-8 rounded-3xl relative group transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] border-l-4 border-l-purple-500/50">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-2">
                                <TrendingUp size={12} className="text-purple-400" />
                                <span className="text-xs font-medium text-purple-300">Real-Time Optimization</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Library System</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Shield size={20} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Visualization: Redis Graph */}
                    <div className="bg-black/40 rounded-xl p-4 mb-6 border border-white/5 relative overflow-hidden h-32 flex flex-col justify-end">
                        <div className="absolute top-3 right-3 text-xs text-purple-300 font-mono">Latency: 12ms</div>

                        {/* Simulated Graph Bars */}
                        <div className="flex items-end justify-between h-20 gap-1 opacity-80">
                            {[40, 60, 30, 80, 50, 90, 70, 40, 60, 100].map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className="w-full bg-purple-500/40 rounded-t-sm hover:bg-purple-400 transition-colors"
                                />
                            ))}
                        </div>
                        <div className="w-full bg-purple-500/20 h-[1px] mt-1 relative">
                            <div className="absolute left-0 top-0 h-full bg-purple-400 w-1/2 animate-progress-loading" />
                        </div>
                        <p className="mt-2 text-xs text-gray-500 font-mono">Redis Caching Layer • OAuth 2.0 Secured</p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-auto">
                        <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                            Learn more <TrendingUp size={14} />
                        </button>
                        <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">v2.4.0</div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[80px] pointer-events-none group-hover:bg-purple-600/30 transition-all" />

                </div>

            </div>

            <style>{`
        @keyframes slide-left {
            0% { transform: translateX(100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
        }
        .animate-slide-left {
            animation: slide-left 3s linear infinite;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
        </section>
    );
};

export default Projects;
