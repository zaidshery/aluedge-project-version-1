import React from "react";
import { CheckCircle2 } from "lucide-react";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: string[];
  actions?: React.ReactNode;
  className?: string;
};

export default function CTASection({
  eyebrow,
  title,
  description,
  bullets,
  actions,
  className = "",
}: CTASectionProps) {
  return (
    <section className={`container cta-section ${className}`.trim()}>
      <div className="cta-panel">
        <div className="cta-panel__copy">
          {eyebrow && <p className="cta-panel__eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="cta-panel__bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2 size={16} strokeWidth={2.2} />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
        {actions && <div className="cta-panel__actions">{actions}</div>}
      </div>
    </section>
  );
}
