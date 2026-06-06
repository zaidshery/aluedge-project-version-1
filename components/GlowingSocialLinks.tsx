import React from "react";

const neonStyles = `
@keyframes neonFloat {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.neon-social-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.neon-social-container {
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px !important;
  padding: 8px 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  margin: 0 !important;
}

.mobile-menu__actions .neon-social-container {
  background: linear-gradient(180deg, #090a0e 0%, #030406 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.04) !important;
  border-radius: 20px !important;
  box-shadow: 
    0 16px 36px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
  padding: 12px 18px !important;
}

.neon-social-link {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 46px !important;
  height: 46px !important;
  border-radius: 13px !important;
  background: rgba(255, 255, 255, 0.01) !important;
  border: 1.5px solid transparent !important;
  cursor: pointer !important;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02) !important;
  padding: 0 !important;
  overflow: visible !important;
  animation: neonFloat 4s ease-in-out infinite !important;
}

/* Stagger floating animations */
.neon-social-link:nth-child(1) { animation-delay: 0s !important; }
.neon-social-link:nth-child(2) { animation-delay: 0.8s !important; }
.neon-social-link:nth-child(3) { animation-delay: 1.6s !important; }
.neon-social-link:nth-child(4) { animation-delay: 2.4s !important; }
.neon-social-link:nth-child(5) { animation-delay: 3.2s !important; }

.neon-social-link svg {
  width: 22px !important;
  height: 22px !important;
  fill: none !important;
  stroke-width: 1.8px !important;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* Hover behaviors */
.neon-social-link:hover {
  animation-play-state: paused !important;
  transform: translateY(-6px) scale(1.06) !important;
}

/* WhatsApp: Green Neon */
.neon-social-link--whatsapp {
  border-color: rgba(37, 211, 102, 0.22) !important;
  box-shadow: 
    0 0 10px rgba(37, 211, 102, 0.06), 
    inset 0 0 6px rgba(37, 211, 102, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
}
.neon-social-link--whatsapp svg {
  stroke: rgba(37, 211, 102, 0.75) !important;
  filter: drop-shadow(0 0 3px rgba(37, 211, 102, 0.3)) !important;
}
.neon-social-link--whatsapp:hover {
  border-color: rgba(37, 211, 102, 1) !important;
  background: rgba(37, 211, 102, 0.08) !important;
  box-shadow: 
    0 0 22px rgba(37, 211, 102, 0.5), 
    0 0 6px rgba(37, 211, 102, 0.25), 
    inset 0 0 10px rgba(37, 211, 102, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}
.neon-social-link--whatsapp:hover svg {
  stroke: rgba(37, 211, 102, 1) !important;
  filter: drop-shadow(0 0 6px rgba(37, 211, 102, 0.8)) !important;
}

/* Facebook: Blue Neon */
.neon-social-link--facebook {
  border-color: rgba(24, 119, 242, 0.22) !important;
  box-shadow: 
    0 0 10px rgba(24, 119, 242, 0.06), 
    inset 0 0 6px rgba(24, 119, 242, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
}
.neon-social-link--facebook svg {
  stroke: rgba(24, 119, 242, 0.75) !important;
  filter: drop-shadow(0 0 3px rgba(24, 119, 242, 0.3)) !important;
}
.neon-social-link--facebook:hover {
  border-color: rgba(24, 119, 242, 1) !important;
  background: rgba(24, 119, 242, 0.08) !important;
  box-shadow: 
    0 0 22px rgba(24, 119, 242, 0.5), 
    0 0 6px rgba(24, 119, 242, 0.25), 
    inset 0 0 10px rgba(24, 119, 242, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}
.neon-social-link--facebook:hover svg {
  stroke: rgba(24, 119, 242, 1) !important;
  filter: drop-shadow(0 0 6px rgba(24, 119, 242, 0.8)) !important;
}

/* Twitter: Cyan/Light Blue Neon */
.neon-social-link--twitter {
  border-color: rgba(29, 161, 242, 0.22) !important;
  box-shadow: 
    0 0 10px rgba(29, 161, 242, 0.06), 
    inset 0 0 6px rgba(29, 161, 242, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
}
.neon-social-link--twitter svg {
  stroke: rgba(29, 161, 242, 0.75) !important;
  filter: drop-shadow(0 0 3px rgba(29, 161, 242, 0.3)) !important;
}
.neon-social-link--twitter:hover {
  border-color: rgba(29, 161, 242, 1) !important;
  background: rgba(29, 161, 242, 0.08) !important;
  box-shadow: 
    0 0 22px rgba(29, 161, 242, 0.5), 
    0 0 6px rgba(29, 161, 242, 0.25), 
    inset 0 0 10px rgba(29, 161, 242, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}
.neon-social-link--twitter:hover svg {
  stroke: rgba(29, 161, 242, 1) !important;
  filter: drop-shadow(0 0 6px rgba(29, 161, 242, 0.8)) !important;
}

/* Instagram: Pink/Magenta Neon */
.neon-social-link--instagram {
  border-color: rgba(225, 48, 108, 0.22) !important;
  box-shadow: 
    0 0 10px rgba(225, 48, 108, 0.06), 
    inset 0 0 6px rgba(225, 48, 108, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
}
.neon-social-link--instagram svg {
  stroke: rgba(225, 48, 108, 0.75) !important;
  filter: drop-shadow(0 0 3px rgba(225, 48, 108, 0.3)) !important;
}
.neon-social-link--instagram:hover {
  border-color: rgba(225, 48, 108, 1) !important;
  background: rgba(225, 48, 108, 0.08) !important;
  box-shadow: 
    0 0 22px rgba(225, 48, 108, 0.5), 
    0 0 6px rgba(225, 48, 108, 0.25), 
    inset 0 0 10px rgba(225, 48, 108, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}
.neon-social-link--instagram:hover svg {
  stroke: rgba(225, 48, 108, 1) !important;
  filter: drop-shadow(0 0 6px rgba(225, 48, 108, 0.8)) !important;
}

/* LinkedIn: Deep Corporate Blue Neon */
.neon-social-link--linkedin {
  border-color: rgba(10, 102, 194, 0.22) !important;
  box-shadow: 
    0 0 10px rgba(10, 102, 194, 0.06), 
    inset 0 0 6px rgba(10, 102, 194, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.03) !important;
}
.neon-social-link--linkedin svg {
  stroke: rgba(10, 102, 194, 0.75) !important;
  filter: drop-shadow(0 0 3px rgba(10, 102, 194, 0.3)) !important;
}
.neon-social-link--linkedin:hover {
  border-color: rgba(10, 102, 194, 1) !important;
  background: rgba(10, 102, 194, 0.08) !important;
  box-shadow: 
    0 0 22px rgba(10, 102, 194, 0.5), 
    0 0 6px rgba(10, 102, 194, 0.25), 
    inset 0 0 10px rgba(10, 102, 194, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}
.neon-social-link--linkedin:hover svg {
  stroke: rgba(10, 102, 194, 1) !important;
  filter: drop-shadow(0 0 6px rgba(10, 102, 194, 0.8)) !important;
}

/* Responsive adjustment */
@media (max-width: 640px) {
  .neon-social-link {
    width: 40px !important;
    height: 40px !important;
    border-radius: 10px !important;
  }
  .neon-social-link svg {
    width: 18px !important;
    height: 18px !important;
  }
}
`;

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.6-.5.8-.4.2-.9.3-1.3.3-2.8 0-7.2-4.2-7.2-7 0-.5.1-1 .4-1.4Z" 
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" 
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const glowingSocials = [
  { label: "WhatsApp", href: "https://wa.me/919826345598", icon: WhatsAppIcon, styleClass: "whatsapp" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589392245679", icon: FacebookIcon, styleClass: "facebook" },
  { label: "Twitter", href: "https://x.com/AluEdge", icon: TwitterIcon, styleClass: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/aluedge_1/", icon: InstagramIcon, styleClass: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aluedge-fenestration-solutions-622779410/", icon: LinkedInIcon, styleClass: "linkedin" },
];

type GlowingSocialLinksProps = {
  className?: string;
};

export default function GlowingSocialLinks({ className = "" }: GlowingSocialLinksProps) {
  return (
    <div className={`neon-social-wrapper ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: neonStyles }} />
      <div className="neon-social-container">
        {glowingSocials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={`neon-social-link neon-social-link--${social.styleClass}`}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}
