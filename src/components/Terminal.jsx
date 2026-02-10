import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState('');
    const scrollRef = useRef(null);

    // Animation sequences
    useEffect(() => {
        let isCancelled = false;

        const typeCommand = async (command) => {
            for (let i = 0; i <= command.length; i++) {
                if (isCancelled) return;
                setCurrentLine(command.slice(0, i));
                await new Promise(r => setTimeout(r, 50)); // Typing speed
            }
        };

        const runSequence = async () => {
            while (!isCancelled) {
                // Reset
                setLines([]);
                setCurrentLine('');

                // Delay before typing starts
                await new Promise(r => setTimeout(r, 1000));

                // 1. git init-custom
                await typeCommand('git init-custom');
                if (isCancelled) return;

                await new Promise(r => setTimeout(r, 300));
                setLines(prev => [...prev, {
                    type: 'command',
                    text: 'git init-custom',
                    output: 'Initialized empty Git repository in /users/swayam/git-internals/.git/'
                }]);
                setCurrentLine('');
                await new Promise(r => setTimeout(r, 500));

                // 2. git add .
                await typeCommand('git add .');
                if (isCancelled) return;

                await new Promise(r => setTimeout(r, 300));
                setLines(prev => [...prev, {
                    type: 'command',
                    text: 'git add .',
                    output: null
                }]);
                setCurrentLine('');
                await new Promise(r => setTimeout(r, 500));

                // 3. git commit
                const commitCmd = 'git commit -m "Optimize storage"';
                await typeCommand(commitCmd);
                if (isCancelled) return;

                // execute commit
                await new Promise(r => setTimeout(r, 300));
                setLines(prev => [...prev, {
                    type: 'command',
                    text: commitCmd,
                    output: null
                }]);
                setCurrentLine('');

                // 3a. Compressing
                await new Promise(r => setTimeout(r, 500));
                setLines(prev => {
                    const newLines = [...prev];
                    newLines[newLines.length - 1].output = (
                        <div className="space-y-1">
                            <div><span className="text-green-400">✓</span> Compressing objects (zlib)... <span className="text-orange-400">40% reduction</span></div>
                        </div>
                    );
                    return newLines;
                });

                // 3b. Validating
                await new Promise(r => setTimeout(r, 800));
                setLines(prev => {
                    const newLines = [...prev];
                    const existingOutput = newLines[newLines.length - 1].output;
                    newLines[newLines.length - 1].output = (
                        <div className="space-y-1">
                            {existingOutput.props.children}
                            <div><span className="text-green-400">✓</span> Validating SHA-1... <span className="text-green-400">100% Integrity</span></div>
                        </div>
                    );
                    return newLines;
                });

                // 3c. Writing & Summary
                await new Promise(r => setTimeout(r, 800));
                setLines(prev => {
                    const newLines = [...prev];
                    const existingOutput = newLines[newLines.length - 1].output;
                    newLines[newLines.length - 1].output = (
                        <div className="space-y-1">
                            {existingOutput.props.children}
                            <div><span className="text-green-400">✓</span> Writing tree objects... done</div>
                            <div className="text-gray-500 mt-2">[main 8a2b3c] Optimize storage<br /> 3 files changed, 142 insertions(+)</div>
                        </div>
                    );
                    return newLines;
                });

                // Delay before clear
                await new Promise(r => setTimeout(r, 2000));

                // Type clear
                await typeCommand('clear');
                if (isCancelled) return;

                await new Promise(r => setTimeout(r, 500));
                setCurrentLine('');
                setLines([]); // Clear terminal

                // Small pause before restarting loop
                await new Promise(r => setTimeout(r, 500));
            }
        };

        runSequence();
        return () => { isCancelled = true; };
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines, currentLine]);

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
                <div ref={scrollRef} className="p-6 font-mono text-sm md:text-base space-y-4 h-64 overflow-y-auto custom-scrollbar">

                    {lines.map((line, index) => (
                        <div key={index} className="group">
                            <div className="flex gap-2 text-gray-300">
                                <span className="text-green-500">➜</span>
                                <span className="text-blue-400">git-internals</span>
                                <span className="text-gray-400">{line.text}</span>
                            </div>
                            {line.output && (
                                <div className="text-gray-500 pl-4 mt-1">
                                    {typeof line.output === 'string' ? line.output : line.output}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Active Line */}
                    <div className="flex gap-2 text-gray-300">
                        <span className="text-green-500">➜</span>
                        <span className="text-blue-400">git-internals</span>
                        <span className="text-gray-400">{currentLine}</span>
                        <span className="w-2 h-5 bg-gray-400 animate-pulse" />
                    </div>

                </div>

                {/* Interactive Caption */}
                <div className="px-6 py-4 border-t border-white/5 flex justify-between items-center bg-black/20">
                    <span className="text-sm text-gray-400">Recreated Git internals from scratch in Python.</span>
                    <a href="https://github.com/masterfighter999/building-my-own-Git" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">View Source code</a>
                </div>
            </div>
        </section>
    );
};

export default Terminal;
