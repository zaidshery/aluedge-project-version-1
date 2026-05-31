import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import { businessDetails } from "./businessDetails";
import SocialLinks from "./SocialLinks";

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
          <div className="footer__social-group">
            <span className="footer__social-label">Connect with us</span>
            <SocialLinks className="footer__social" linkClassName="footer__social-link" />
          </div>
        </div>
        <div className="footer__links" aria-label="Footer navigation">
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
        </div>
        <div className="footer__contact">
          <h2>Contact Us</h2>
          <div className="footer__contact-list">
            <a className="footer__contact-row footer__contact-row--phone" href={businessDetails.phoneHref}>
              <span className="footer__contact-icon" aria-hidden="true">
                <Phone size={19} strokeWidth={2.25} />
              </span>
              <span className="footer__contact-copy">
                <strong>{businessDetails.phone}</strong>
              </span>
            </a>
            <div className="footer__contact-row">
              <span className="footer__contact-icon" aria-hidden="true">
                <MapPin size={22} strokeWidth={2.3} />
              </span>
              <div className="footer__contact-copy">
                <strong>Experience Centre</strong>
                <p>{businessDetails.address}</p>
              </div>
            </div>
            <a className="footer__contact-row footer__contact-row--email" href={businessDetails.emailHref}>
              <span className="footer__contact-icon" aria-hidden="true">
                <Mail size={20} strokeWidth={2.25} />
              </span>
              <span className="footer__contact-copy">
                <strong>{businessDetails.email}</strong>
              </span>
            </a>
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
