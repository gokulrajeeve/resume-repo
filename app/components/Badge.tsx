interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300',
    primary: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-1 dark:ring-blue-500/20',
    secondary: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 dark:ring-1 dark:ring-purple-500/20',
  };

  return (
    <span className={`inline-block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${variants[variant]}`}>
      {children}
    </span>
  );
}
