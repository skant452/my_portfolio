'use client';

import { useEffect, useState } from 'react';
import { Menu, X, FileDown, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(124,92,255,0.35)]'
          : 'border-b border-transparent bg-background/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <img
                src="/shashi.jpeg"
                alt="Shashikant Kumar"
                className="w-9 h-9 rounded-full object-cover border-2 border-primary/40"
              />
              <span className="text-2xl font-extrabold gradient-text">SK</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="gradient-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* <a
              href="/Shashikant_Kumar_Resume.docx"
              download
              className="gradient-underline flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileDown size={16} />
              <span className="hidden lg:inline">Resume</span>
            </a> */}
            <a
              href="#contact"
              className="btn-glow px-5 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-sm font-semibold hover:brightness-110"
            >
              Hire Me
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-slide-fade">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary hover:pl-6 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Shashikant_Kumar_Resume.docx"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm font-semibold text-center bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
