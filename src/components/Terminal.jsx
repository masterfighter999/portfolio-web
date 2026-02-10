import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
    return (
        <section className="py-20 px-4 flex justify-center">
            <div className="w-full max-w-3xl glass-panel rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0a0a0a]/90 backdrop-blur-xl">

                {/* Terminal Header */}
                <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-1">
                        <TerminalIcon size={12} />
                        <span>swayam@architecture:~/git-internals</span>
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base space-y-4 h-64 overflow-y-auto custom-scrollbar">

                    {/* Command 1 */}
                    <div className="group">
                        <div className="flex gap-2 text-gray-300">
                            <span className="text-green-500">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-gray-400">git init-custom</span>
                        </div>
                        <div className="text-gray-500 pl-4 mt-1">Initialized empty Git repository in /users/swayam/git-internals/.git/</div>
                    </div>

                    {/* Command 2 */}
                    <div className="group">
                        <div className="flex gap-2 text-gray-300">
                            <span className="text-green-500">➜</span>
                            <span className="text-blue-400">git-internals</span>
                            <span className="text-gray-400">git add .</span>
                        </div>
                    </div>

                    {/* Command 3 - Output */}
                    <div className="group">
                        <div className="flex gap-2 text-gray-300">
                            <span className="text-green-500">➜</span>
                            <span className="text-blue-400">git-internals</span>
                            <span className="text-gray-400">git commit -m "Optimize storage"</span>
                        </div>

                        <div className="pl-4 mt-2 space-y-1">
                            <div className="text-gray-300">
                                <span className="text-green-400">✓</span> Compressing objects (zlib)... <span className="text-orange-400">40% reduction</span>
                            </div>
                            <div className="text-gray-300">
                                <span className="text-green-400">✓</span> Validating SHA-1... <span className="text-green-400">100% Integrity</span>
                            </div>
                            <div className="text-gray-300">
                                <span className="text-green-400">✓</span> Writing tree objects... done
                            </div>
                            <div className="text-gray-500 mt-2">
                                [main 8a2b3c] Optimize storage
                                <br /> 3 files changed, 142 insertions(+)
                            </div>
                        </div>
                    </div>

                    {/* Cursor */}
                    <div className="flex gap-2 text-gray-300 pt-2">
                        <span className="text-green-500">➜</span>
                        <span className="text-blue-400">git-internals</span>
                        <span className="w-2 h-5 bg-gray-400 animate-pulse" />
                    </div>

                </div>

                {/* Interactive Caption */}
                <div className="px-6 py-4 border-t border-white/5 flex justify-between items-center bg-black/20">
                    <span className="text-sm text-gray-400">Recreated Git internals from scratch in Python.</span>
                    <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">View Source code</a>
                </div>
            </div>
        </section>
    );
};

export default Terminal;
