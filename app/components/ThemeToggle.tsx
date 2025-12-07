'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-slate-700 hover:scale-110 transition-all duration-200 hover:shadow-2xl"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={22} className="text-yellow-500" />
      ) : (
        <Moon size={22} className="text-gray-700" />
      )}
    </button>
  );
}
