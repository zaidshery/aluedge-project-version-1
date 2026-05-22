import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import BrandMark from "./BrandMark";
import { businessDetails } from "./businessDetails";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <BrandMark />
          <p>
            Premium aluminium, uPVC, facade and glazing solutions for modern architecture across
            India.
          </p>
          <div className="footer__contact-actions" aria-label="Primary contact methods">
            <a href={businessDetails.phoneHref}>
              <Phone size={15} /> Call
            </a>
            <a href={businessDetails.emailHref}>
              <Mail size={15} /> Email
            </a>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h2>Quick Links</h2>
            <Link href="/">Home</Link>
            <Link href="/products">Products & Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About Us</Link>
            <Link href="/resources/material-guidance">Resources</Link>
          </div>
          <div>
            <h2>Our Solutions</h2>
            <Link href="/products/windows-doors">Windows & Doors</Link>
            <Link href="/products/facade-glazing">Facade & Glazing</Link>
            <Link href="/products/cladding-ceilings">Cladding Solutions</Link>
            <Link href="/products/cladding-ceilings">Ceiling Systems</Link>
            <Link href="/products">Color & Materials</Link>
          </div>
          <div>
            <h2>Resources</h2>
            <Link href="/projects">Case Studies</Link>
            <Link href="/resources/material-guidance">Material Guidance</Link>
            <Link href="/products">Applications</Link>
            <Link href="/contact">Architect Support</Link>
            <Link href="/contact">Project Consultation</Link>
          </div>
          <div>
            <h2>Contact Us</h2>
            <a href={businessDetails.phoneHref}>{businessDetails.phone}</a>
            {businessDetails.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="block hover:underline">{email}</a>
            ))}
            <p className="mt-2 text-xs leading-relaxed opacity-80">{businessDetails.address}</p>
            <p className="text-xs opacity-80">Service area: {businessDetails.serviceArea} project support</p>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} AluEdge Fenestration Solutions. All rights reserved.</p>
        <nav aria-label="Legal links">
          <Link href="/about">Privacy Policy</Link>
          <Link href="/about">Terms & Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
