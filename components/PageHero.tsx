import React from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  media,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`page-hero ${media ? "" : "page-hero--compact"} ${className}`.trim()}>
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="page-hero__description">{description}</p>}
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
        {media && <div className="page-hero__media">{media}</div>}
      </div>
    </section>
  );
}
