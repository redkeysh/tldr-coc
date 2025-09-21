import { ReactNode } from 'react';

interface TLDRCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'ok' | 'bad';
}

export default function TLDRCard({ 
  title, 
  children, 
  className = '',
  variant = 'default'
}: TLDRCardProps) {
  const variantStyles = {
    default: 'border-[var(--card-border)] shadow-sm',
    ok: 'border-l-4 border-l-[var(--ok)] border-t-[var(--card-border)] border-r-[var(--card-border)] border-b-[var(--card-border)] shadow-sm hover:shadow-md transition-shadow',
    bad: 'border-l-4 border-l-[var(--bad)] border-t-[var(--card-border)] border-r-[var(--card-border)] border-b-[var(--card-border)] shadow-sm hover:shadow-md transition-shadow'
  };

  return (
    <div 
      className={`
        bg-[var(--card)] 
        rounded-lg 
        p-6 
        border 
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {title && (
        <h3 className="text-xl font-semibold text-[var(--fg)] mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
