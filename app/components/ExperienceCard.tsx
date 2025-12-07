import { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  children: ReactNode;
}

export function ExperienceCard({ title, company, period, location, children }: ExperienceCardProps) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {company}
          </p>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-right shrink-0">
          <p className="font-medium">{period}</p>
          {location && <p className="mt-1">{location}</p>}
        </div>
      </div>
      <div className="text-base text-gray-700 dark:text-gray-300 space-y-2.5 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
