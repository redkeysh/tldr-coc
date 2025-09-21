import { ReactNode } from 'react';
import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Callout({ 
  type = 'info', 
  title, 
  children, 
  className = '' 
}: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bgColor: 'bg-[var(--accent-contrast)]',
      borderColor: 'border-[var(--accent)]',
      iconColor: 'text-[var(--accent)]',
      role: 'note' as const
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-500',
      iconColor: 'text-amber-600 dark:text-amber-400',
      role: 'alert' as const
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-[var(--ok-ink)]',
      borderColor: 'border-[var(--ok)]',
      iconColor: 'text-[var(--ok)]',
      role: 'status' as const
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-[var(--bad-ink)]',
      borderColor: 'border-[var(--bad)]',
      iconColor: 'text-[var(--bad)]',
      role: 'alert' as const
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor, role } = config[type];

  return (
    <div 
      className={`
        ${bgColor} 
        border-l-4 
        ${borderColor} 
        p-4 
        rounded-r-lg 
        ${className}
      `}
      role={role}
      aria-labelledby={title ? `callout-title-${Date.now()}` : undefined}
    >
      <div className="flex items-start gap-3">
        <Icon 
          className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} 
          aria-hidden="true"
        />
        <div className="flex-1">
          {title && (
            <h4 
              className={`font-semibold ${iconColor} mb-2`}
              id={title ? `callout-title-${Date.now()}` : undefined}
            >
              {title}
            </h4>
          )}
          <div className="text-[var(--fg)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
