'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className={`relative inline-flex h-9 w-14 lg:w-20 shrink-0 items-center rounded-full border transition-colors duration-300 touch-manipulation ${
        isDark ? 'bg-secondary border-primary/40' : 'bg-secondary border-border'
      }`}
    >
      <span
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground transition-all duration-300 ${
          isDark ? 'left-2' : 'right-2'
        }`}
      >
        {isDark ? 'Dark' : 'Light'}
      </span>
      <span
        className={`absolute top-0.5 left-0.5 flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-5 lg:translate-x-11' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-primary-foreground" />
        ) : (
          <Sun size={14} className="text-primary-foreground" />
        )}
      </span>
    </button>
  );
}
