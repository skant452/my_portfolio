import { portfolioData } from '@/lib/portfolio-data';
import { Code2, Layout, Server, Link2, Wrench } from 'lucide-react';

const palette = [
  { text: 'text-[#7c5cff]', bg: 'bg-[#7c5cff]/10', border: 'hover:border-[#7c5cff]/60', shadow: 'hover:shadow-[#7c5cff]/20' },
  { text: 'text-[#b45cff]', bg: 'bg-[#b45cff]/10', border: 'hover:border-[#b45cff]/60', shadow: 'hover:shadow-[#b45cff]/20' },
  { text: 'text-[#f6339a]', bg: 'bg-[#f6339a]/10', border: 'hover:border-[#f6339a]/60', shadow: 'hover:shadow-[#f6339a]/20' },
  { text: 'text-[#ff7a45]', bg: 'bg-[#ff7a45]/10', border: 'hover:border-[#ff7a45]/60', shadow: 'hover:shadow-[#ff7a45]/20' },
  { text: 'text-[#ffb648]', bg: 'bg-[#ffb648]/10', border: 'hover:border-[#ffb648]/60', shadow: 'hover:shadow-[#ffb648]/20' },
];

export function Skills() {
  const skillCategories = [
    { label: 'Languages', icon: Code2, skills: portfolioData.skills.languages },
    { label: 'Frontend', icon: Layout, skills: portfolioData.skills.frontend },
    { label: 'Backend & DB', icon: Server, skills: portfolioData.skills.backend },
    { label: 'Blockchain', icon: Link2, skills: portfolioData.skills.blockchain },
    { label: 'Tools & AI', icon: Wrench, skills: portfolioData.skills.tools },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-muted-foreground mt-4">Proficient in a wide range of technologies and frameworks</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const colors = palette[idx % palette.length];
              const Icon = category.icon;
              return (
                <div
                  key={category.label}
                  className={`group p-6 border border-border rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${colors.border} ${colors.shadow}`}
                >
                  <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-3">
                    <span className={`p-2 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform`}>
                      <Icon size={18} />
                    </span>
                    {category.label}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`${colors.text}`}>▸</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Skills Highlight */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-[#ff7a45]/10 border border-primary/20 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Key Expertise Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'RESTful APIs', desc: 'Design and implementation' },
                { title: 'Web3 Integration', desc: 'Smart contracts & Blockchain' },
                { title: 'AI Integration', desc: 'OpenAI APIs & Generative AI' },
                { title: 'Performance', desc: 'Optimization & Scalability' },
              ].map((item) => (
                <div key={item.title} className="hover:-translate-y-1 transition-transform">
                  <p className="font-semibold gradient-text mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
