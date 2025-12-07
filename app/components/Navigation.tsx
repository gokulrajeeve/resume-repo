'use client';

import { useEffect, useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Lightbulb } from 'lucide-react';

const sections = [
  { id: 'summary', label: 'Summary', icon: User },
  { id: 'skills', label: 'Skills', icon: Lightbulb },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed left-6 top-[45%] -translate-y-1/2 z-30 hidden lg:block w-52">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-3">
        <ul className="space-y-2">
          {sections.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left group ${
                  activeSection === id
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Icon
                  size={20}
                  className={`shrink-0 ${
                    activeSection === id ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}
                />
                <span className="font-semibold text-sm">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
