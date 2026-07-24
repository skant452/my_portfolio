'use client';

import { portfolioData } from '@/lib/portfolio-data';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Brain,
  Link2,
  Download,
  Database,
  Braces,
  FileCode,
  Mail,
  Phone,
  Share2,
} from 'lucide-react';

const floatingBadges = [
  { icon: Code2, label: 'React / Next.js / Node.js / Express.js', className: '-top-2 -left-6', delay: '0s' },
  { icon: Brain, label: 'OpenAI', className: '-top-2 -right-6', delay: '2.8s' },
  { icon: Database, label: 'MongoDB / SQL', className: '-bottom-2 -left-6', delay: '0.8s' },
  { icon: Link2, label: 'Web3', className: '-bottom-2 -right-6', delay: '2.2s' },
  { icon: Braces, label: 'JavaScript', className: 'top-1/2 -translate-y-1/2 -left-10', delay: '1.2s' },
  { icon: FileCode, label: 'TypeScript', className: 'top-1/2 -translate-y-1/2 -right-10', delay: '1.8s' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 bg-noise">
        <div className="blob w-96 h-96 bg-primary/30 top-0 -right-20" style={{ animationDelay: '0s' }} />
        <div className="blob w-96 h-96 bg-accent/25 -bottom-20 -left-20" style={{ animationDelay: '4s' }} />
        <div className="blob w-72 h-72 bg-[#ff7a45]/20 top-1/2 left-1/3" style={{ animationDelay: '8s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 animate-slide-fade" style={{ animationDelay: '0s' }}>
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                  <Sparkles size={14} />
                  Welcome to my portfolio
                </p>
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for work
                </p>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight animate-slide-fade"
                style={{ animationDelay: '0.1s' }}
              >
                Hi, I&apos;m {" "} <br/>
                <span className="gradient-text">{portfolioData.name}</span>
              </h1>
              <p className="text-xl font-semibold gradient-text animate-slide-fade" style={{ animationDelay: '0.2s' }}>
                Senior Frontend Developer
              </p>
            </div>

            <p
              className="text-base text-muted-foreground leading-relaxed max-w-lg animate-slide-fade"
              style={{ animationDelay: '0.3s' }}
            >
              {portfolioData.tagline}. Building secure, scalable applications with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-fade" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="btn-glow px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:brightness-110 transition-all flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="/Shashikant_Resume_latest.docx"
                download
                className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center gap-2 group"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Resume
              </a>
            </div>

            {/* Contact + Social */}
            <div
              className="flex flex-wrap items-center gap-6 pt-8 text-sm text-muted-foreground border-t border-border animate-slide-fade"
              style={{ animationDelay: '0.5s' }}
            >
              <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={16} />
                {portfolioData.email}
              </a>
              <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone size={16} />
                {portfolioData.phone}
              </a>
              <span className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/shashikant-kumar-1485a3129"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                >
                  <Share2 size={16} />
                </a>
                <a
                  href="https://github.com/skant452"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
                >
                  <Code2 size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="hidden lg:flex justify-center items-center animate-slide-fade" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 border border-primary/20 rounded-3xl animate-float" />
              <div className="absolute inset-8 border border-accent/20 rounded-2xl animate-float" style={{ animationDelay: '1s' }} />

              {/* Animated core - profile photo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-[#ff7a45] opacity-60 blur-2xl animate-pulse" />
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full p-1.5 bg-gradient-to-br from-primary via-accent to-[#ff7a45]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img
                      src="/shashi.jpeg"
                      alt={portfolioData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map(({ icon: Icon, label, className, delay }) => (
                <div
                  key={label}
                  className={`absolute transform ${className} animate-float px-3 py-2 rounded-xl bg-card/90 border border-border backdrop-blur-md flex items-center gap-2 text-xs font-medium text-foreground shadow-lg hover:border-primary/60 hover:scale-110 transition-transform`}
                  style={{ animationDelay: delay }}
                >
                  <Icon size={14} className="text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
