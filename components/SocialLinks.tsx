import React from "react";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function XSocialIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.2 18.8 6 16.1A7.6 7.6 0 1 1 8.1 18l-2.9.8Z" />
      <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.6-.5.8-.4.2-.9.3-1.3.3-2.8 0-7.2-4.2-7.2-7 0-.5.1-1 .4-1.4Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/919826345598", icon: WhatsAppIcon, tone: "whatsapp" },
  { label: "Instagram", href: "#", icon: InstagramIcon, tone: "instagram" },
  { label: "Facebook", href: "#", icon: FacebookIcon, tone: "facebook" },
  { label: "X", href: "#", icon: XSocialIcon, tone: "x" },
];

type SocialLinksProps = {
  className: string;
  linkClassName: string;
  ariaLabel?: string;
};

export default function SocialLinks({ className, linkClassName, ariaLabel = "Social links" }: SocialLinksProps) {
  return (
    <div className={className} aria-label={ariaLabel}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`${linkClassName} ${linkClassName}--${social.tone}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
