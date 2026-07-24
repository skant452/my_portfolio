import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold gradient-text mb-2 inline-block">
              Shashikant Kumar
            </p>
            <p className="text-sm text-muted-foreground">
              Senior Frontend developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary hover:pl-1 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary hover:pl-1 transition-all">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary hover:pl-1 transition-all">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary hover:pl-1 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/Shashikant_Resume_latest.docx" download className="hover:text-accent hover:pl-1 transition-all">
                  Download Resume
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shashikant-kumar-1485a3129" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:pl-1 transition-all">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/skant452" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:pl-1 transition-all">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shashikant Kumar. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary-foreground transition-all border border-border rounded-lg hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-0.5"
          >
            <span className='hidden sm:block'>Back to top</span>
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
