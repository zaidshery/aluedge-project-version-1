import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { businessDetails } from "./businessDetails";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>Serving Architects, Builders & Developers Across India</p>
          <div className="topbar__contact">
            <a href={businessDetails.phoneHref} className="hover:text-green transition-colors flex items-center gap-1">
              <Phone size={13} /> {businessDetails.phone}
            </a>
            <a href={businessDetails.emailHref} className="hover:text-green transition-colors flex items-center gap-1">
              <Mail size={13} /> {businessDetails.email}
            </a>
            <span className="flex items-center gap-1">
              <MapPin size={13} /> {businessDetails.serviceArea} Service
            </span>
          </div>
        </div>
      </div>

      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
