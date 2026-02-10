import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'System Design', href: '#system-design' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1Z0rRHWrmNZQ2mm4U5pgAwXep5QA1bhHd/view?usp=sharing' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="glass-pill px-6 py-3 flex items-center justify-between w-full max-w-2xl transition-all duration-300 pointer-events-auto">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Resume' ? "_blank" : undefined}
              rel={link.name === 'Resume' ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-text-secondary hover:text-white hover:text-glow transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <button className="hidden md:block btn-premium-secondary px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          Get in Touch
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Resume' ? "_blank" : undefined}
              rel={link.name === 'Resume' ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
