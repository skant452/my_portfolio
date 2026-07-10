import { portfolioData } from '@/lib/portfolio-data';
import { Code2, Smartphone, Sparkles, GitBranch } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Development', value: 'React, Node.js, Databases' },
  { icon: Smartphone, label: 'Mobile Development', value: 'React Native, Cross-platform' },
  { icon: Sparkles, label: 'Modern Tech Stack', value: 'AI, Blockchain, APIs' },
  { icon: GitBranch, label: 'Best Practices', value: 'Clean Code, Git Workflows' },
];

const totalSkills = Object.values(portfolioData.skills).reduce((sum, arr) => sum + arr.length, 0);

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: `30+`, label: 'Projects Delivered' },
  { value: `${totalSkills}+`, label: 'Technologies' },
  { value: '4', label: 'Client Locations' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="blob w-72 h-72 bg-primary/10 -top-10 left-1/4" />
        <div className="blob w-72 h-72 bg-accent/10 bottom-0 right-1/4" style={{ animationDelay: '5s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
         <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left - Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-[#ff7a45] opacity-70 blur-2xl animate-float" />
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full p-1.5 bg-gradient-to-br from-primary via-accent to-[#ff7a45]">
                <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                  <img
                    src="/shashi.jpeg"
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-2xl bg-card border border-border shadow-lg flex items-center gap-2 hover:scale-105 hover:border-primary/50 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold">Open to work</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">{portfolioData.name}</span> — {portfolioData.title}
              </h3>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {portfolioData.summary}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl border border-border hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glow-card p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{label}</p>
                    <p className="font-semibold text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
