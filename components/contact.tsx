import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Phone, Share2, Code2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="glow-card p-6 group"
            >
              <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">{portfolioData.email}</p>
              <p className="text-xs text-muted-foreground mt-2">I typically respond within 24 hours</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.phone}`}
              className="glow-card p-6 group"
            >
              <Phone className="w-8 h-8 text-accent mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">{portfolioData.phone}</p>
              <p className="text-xs text-muted-foreground mt-2">Available for calls during business hours</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-semibold text-center mb-8">Follow My Work</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all group"
              >
                <Share2 size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 transition-all group"
              >
                <Code2 size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-[#ff7a45]/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m open to exciting projects and collaborations. Let&apos;s build something amazing.
            </p>
            <a
              href={`mailto:${portfolioData.email}`}
              className="btn-glow inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:brightness-110 transition-all"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
