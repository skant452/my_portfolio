'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from 'lucide-react';

type Project = {
  name: string;
  client: string;
  tech: string[];
  description: string;
  highlights: string[];
};

const accentPalette = [
  { from: '#7c5cff', to: '#b45cff' },
  { from: '#b45cff', to: '#f6339a' },
  { from: '#f6339a', to: '#ff7a45' },
  { from: '#ff7a45', to: '#ffb648' },
  { from: '#ffb648', to: '#7c5cff' },
  { from: '#7c5cff', to: '#f6339a' },
];

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const count = projects.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [playing, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) prev();
        if (delta < -50) next();
        touchStartX.current = null;
      }}
    >
      {/* Track */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, idx) => {
            const colors = accentPalette[idx % accentPalette.length];
            return (
              <div key={project.name} className="w-full shrink-0 px-1">
                <div
                  className="glow-card overflow-hidden"
                  style={{ ['--glow' as string]: colors.from }}
                >
                  {/* Gradient header */}
                  <div
                    className="h-2 w-full"
                    style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
                  />
                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Icon + index */}
                    <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white shrink-0"
                        style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
                      >
                        {project.name.charAt(0)}
                      </div>
                      <p className="text-xs font-mono text-muted-foreground">
                        {String(idx + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-4 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
                        </div>
                        <ExternalLink size={20} className="text-muted-foreground shrink-0 mt-1" />
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-full border"
                            style={{ borderColor: `${colors.from}55`, color: colors.from, backgroundColor: `${colors.from}14` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="grid sm:grid-cols-2 gap-2 pt-2 border-t border-border">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-xs text-muted-foreground flex items-start gap-2 pt-2">
                            <span style={{ color: colors.to }}>▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="p-2.5 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.name}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-gradient-to-r from-primary to-accent' : 'w-2 bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause autoplay' : 'Resume autoplay'}
          className="p-2.5 rounded-full border border-border hover:border-accent hover:text-accent hover:scale-110 transition-all"
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          onClick={next}
          aria-label="Next project"
          className="p-2.5 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
