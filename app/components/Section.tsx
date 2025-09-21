import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ 
  id, 
  title, 
  description, 
  children, 
  className = '' 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-12 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 
            id={id ? `${id}-heading` : undefined}
            className="text-3xl font-bold text-[var(--fg)] mb-4"
          >
            {title}
          </h2>
          {description && (
            <p className="text-lg text-[var(--muted)] max-w-4xl">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
