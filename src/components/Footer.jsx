import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="relative py-12 px-4 mt-20 border-t border-white/5 bg-[#020202]">
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-orange-600/20 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">

                {/* Contact Links */}
                <div className="flex gap-8">
                    <a href="https://www.linkedin.com/in/swayam-chatterjee" target="_blank" rel="noopener noreferrer" className="p-3 glass-pill hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/masterfighter999" target="_blank" rel="noopener noreferrer" className="p-3 glass-pill hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110">
                        <Github size={20} />
                    </a>
                    <a href="mailto:swayamchatterjee.office@gmail.com" className="p-3 glass-pill hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-white">Swayam Chatterjee</h3>
                    <p className="text-gray-500 text-sm">Kolkata, India</p>
                </div>

                {/* Copyright */}
                {/* Copyright */}
                <div className="text-gray-600 text-xs flex items-center gap-1 mt-8">
                    <span>© {new Date().getFullYear()} Swayam Chatterjee. All rights reserved.</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
