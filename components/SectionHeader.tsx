import React from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align} section-header--${tone} ${className}`.trim()}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2 className="section-header__title">{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
}
