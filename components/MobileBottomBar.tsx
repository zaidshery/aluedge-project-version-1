import React from "react";
import { Mail, Phone } from "lucide-react";
import { businessDetails } from "./businessDetails";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" aria-label="Quick contact actions">
      <Link href="/contact">
        <Mail size={15} /> Get Quote
      </Link>
      <a href={businessDetails.phoneHref}>
        <Phone size={15} /> Call Now
      </a>
    </div>
  );
}
