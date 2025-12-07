import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
