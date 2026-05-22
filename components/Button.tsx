import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `button button--${variant}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link className={className} href={href} onClick={onClick}>
          <span>{children}</span>
          <ArrowRight size={17} strokeWidth={2.3} />
        </Link>
      );
    }
    return (
      <a className={className} href={href} onClick={onClick}>
        <span>{children}</span>
        <ArrowRight size={17} strokeWidth={2.3} />
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.3} />
    </button>
  );
}
