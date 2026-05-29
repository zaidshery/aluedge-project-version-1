import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CardMeta = {
  label: string;
  value: string;
};

type ContentCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  tags?: string[];
  meta?: CardMeta[];
  href?: string;
  actionLabel?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ContentCard({
  title,
  description,
  eyebrow,
  image,
  imageAlt,
  icon,
  tags,
  meta,
  href,
  actionLabel = "Explore",
  children,
  className = "",
  onClick,
}: ContentCardProps) {
  const interactiveProps = onClick
    ? {
        onClick,
        onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick();
          }
        },
        role: "button",
        tabIndex: 0,
      }
    : {};

  const body = (
    <>
      {image && (
        <div className="content-card__media">
          <Image
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc((100vw - 96px) / 2), 620px"
            src={image}
            className="content-card__image"
          />
          {(eyebrow || icon) && (
            <div className="content-card__media-badges">
              {eyebrow && <span className="content-card__tag">{eyebrow}</span>}
              {icon && <span className="content-card__icon">{icon}</span>}
            </div>
          )}
        </div>
      )}

      <div className="content-card__body">
        {!image && icon && <span className="content-card__inline-icon">{icon}</span>}
        <div className="content-card__copy">
          {!image && eyebrow && <p className="content-card__eyebrow">{eyebrow}</p>}
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>

        {children}

        {tags && tags.length > 0 && (
          <div className="content-card__tags" aria-label={`${title} highlights`}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        {meta && meta.length > 0 && (
          <dl className="content-card__meta">
            {meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {href && (
          <Link className="content-card__action" href={href}>
            {actionLabel}
            <ArrowRight size={15} strokeWidth={2.2} />
          </Link>
        )}
      </div>
    </>
  );

  return (
    <article
      className={`content-card ${onClick ? "content-card--interactive" : ""} ${className}`.trim()}
      {...interactiveProps}
    >
      {body}
    </article>
  );
}
