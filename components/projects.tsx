import { portfolioData } from '@/lib/portfolio-data';
import { ProjectCarousel } from '@/components/project-carousel';

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="blob w-80 h-80 bg-primary/10 top-10 -left-20" />
        <div className="blob w-80 h-80 bg-accent/10 bottom-10 -right-20" style={{ animationDelay: '6s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-muted-foreground mt-4">
              Showcasing my best work across different domains and technologies — swipe, click the arrows, or sit back and watch it play.
            </p>
          </div>

          <ProjectCarousel projects={portfolioData.projects} />

          {/* Additional Projects CTA */}
          <div className="mt-4 p-8 text-center glow-card">
            <p className="text-muted-foreground mb-4">
              These are just some of the projects I&apos;ve worked on. I&apos;ve also built numerous
              mobile apps, admin dashboards, and complex integrations.
            </p>
            <a
              href="#contact"
              className="btn-glow inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all"
            >
              Let&apos;s Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
