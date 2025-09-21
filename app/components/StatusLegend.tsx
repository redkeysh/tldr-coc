import { CheckCircle, XCircle } from 'lucide-react';

export default function StatusLegend() {
  return (
    <div 
      className="bg-[var(--card)] border border-[var(--card-border)] rounded-lg p-6 mb-8 shadow-sm"
      role="region"
      aria-labelledby="status-legend-heading"
    >
      <h3 
        id="status-legend-heading" 
        className="text-lg font-semibold text-[var(--fg)] mb-4"
      >
        Status Legend
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle 
            className="w-5 h-5 text-[var(--ok)] flex-shrink-0" 
            aria-hidden="true"
          />
          <div>
            <span className="font-medium text-[var(--ok)]">Expected</span>
            <p className="text-sm text-[var(--muted)]">
              Behaviors we encourage and expect from all community members
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <XCircle 
            className="w-5 h-5 text-[var(--bad)] flex-shrink-0" 
            aria-hidden="true"
          />
          <div>
            <span className="font-medium text-[var(--bad)]">Prohibited</span>
            <p className="text-sm text-[var(--muted)]">
              Behaviors that violate our community standards
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-[var(--muted)]">
        <p>
          <strong>Accessibility note:</strong> We use both color and icons to distinguish between expected and prohibited behaviors. 
          Green indicates expected conduct, while red indicates prohibited conduct.
        </p>
      </div>
    </div>
  );
}
