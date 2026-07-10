'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { ChevronDown, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState('0-0');

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {portfolioData.experience.map((job, jobIdx) => (
              <div key={jobIdx} className="space-y-4">
                <div className="glow-card overflow-hidden">
                  {/* Company Header */}
                  <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex p-3 rounded-xl bg-primary/15 text-primary">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {job.location} • {job.startDate} – {job.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-xs font-semibold shrink-0">
                      {job.endDate === 'Present' ? 'Current' : 'Previous'}
                    </div>
                  </div>

                  {/* Positions - timeline */}
                  <div className="relative pl-8 sm:pl-10 pr-2 py-2">
                    <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
                    {job.positions.map((position, posIdx) => {
                      const key = `${jobIdx}-${posIdx}`;
                      const isOpen = expandedIndex === key;
                      return (
                        <div key={posIdx} className="relative py-3">
                          <span
                            className={`absolute -left-[1.4rem] sm:-left-[1.65rem] top-5 w-3 h-3 rounded-full border-2 border-background transition-colors ${
                              isOpen ? 'bg-accent' : 'bg-primary'
                            }`}
                          />
                          <div className="rounded-xl border border-transparent hover:border-primary/40 hover:bg-secondary/30 transition-all">
                            <button
                              onClick={() => setExpandedIndex(isOpen ? '' : key)}
                              className="w-full p-4 text-left flex items-start justify-between gap-4"
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground">{position.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{position.period}</p>
                              </div>
                              <ChevronDown
                                size={20}
                                className={`flex-shrink-0 mt-1 text-primary transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {/* Expanded Details */}
                            <div
                              className={`grid transition-all duration-300 ease-out ${
                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <ul className="space-y-3 px-4 pb-4">
                                  {position.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex gap-3">
                                      <span className="text-accent font-bold">✓</span>
                                      <span className="text-sm text-muted-foreground">{highlight}</span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
