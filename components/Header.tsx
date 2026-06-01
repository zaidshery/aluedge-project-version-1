"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    text: string;
  }[];
};

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products & Services",
    href: "/products",
    children: [
      { label: "Façade Solutions", href: "/products/facade-solution", text: "Architectural glass and facade envelope systems" },
      { label: "Aluminium Windows & Doors", href: "/products/aluminium-windows-doors", text: "Premium aluminium sliding, casement, and folding systems" },
      { label: "uPVC Windows & Doors", href: "/products/upvc-windows-doors", text: "Soundproof and thermal-efficient uPVC systems" },
      { label: "Cladding Solutions", href: "/products/cladding-solutions", text: "ACP, HPL, and exterior finish systems" },
      { label: "Ceiling Solutions", href: "/products/ceiling-solutions", text: "Metal ceiling and architectural interior systems" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  {
    label: "Resources",
    href: "/products",
    children: [
      { label: "Case Studies", href: "/projects", text: "Installed work across residential and commercial sites" },
      { label: "Material Guidance", href: "/resources/material-guidance", text: "Finish, performance and specification support" },
      { label: "Architect Support", href: "/contact", text: "Consultation for drawings, budgets and timelines" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeDropdownState, setActiveDropdownState] = useState<{
    label: string | null;
    pathname: string;
  }>({
    label: null,
    pathname,
  });
  const [mobileMenuState, setMobileMenuState] = useState({
    isOpen: false,
    pathname,
  });
  const activeDropdown = activeDropdownState.pathname === pathname ? activeDropdownState.label : null;
  const mobileMenuOpen = mobileMenuState.pathname === pathname && mobileMenuState.isOpen;

  const closeDesktopDropdowns = useCallback(() => {
    setActiveDropdownState({
      label: null,
      pathname,
    });
  }, [pathname]);

  const closeNavigationMenus = useCallback(() => {
    closeDesktopDropdowns();
    setMobileMenuState({
      isOpen: false,
      pathname,
    });
  }, [closeDesktopDropdowns, pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark priority />

        <nav aria-label="Primary navigation" className="primary-nav">
          {navigation.map((item) =>
            item.children ? (
              <details className="nav-dropdown" key={item.label} open={activeDropdown === item.label}>
                <summary
                  className={`primary-nav__link${isActive(item.href) ? " active" : ""}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveDropdownState((currentDropdownState) => {
                      const currentDropdown =
                        currentDropdownState.pathname === pathname ? currentDropdownState.label : null;

                      return {
                        label: currentDropdown === item.label ? null : item.label,
                        pathname,
                      };
                    });
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} strokeWidth={2.4} />
                </summary>
                <div className="nav-dropdown__panel">
                  <Link className="nav-dropdown__overview" href={item.href} onClick={closeNavigationMenus}>
                    <span>Explore {item.label}</span>
                    <ArrowRight size={15} strokeWidth={2.3} />
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      className="nav-dropdown__item"
                      href={child.href}
                      key={child.label}
                      onClick={closeNavigationMenus}
                    >
                      <span>{child.label}</span>
                      <small>{child.text}</small>
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                className={`primary-nav__link${isActive(item.href) ? " active" : ""}`}
                href={item.href}
                key={item.label}
                onClick={closeNavigationMenus}
              >
                <span>{item.label}</span>
              </Link>
            )
          )}
        </nav>

        <div className="site-header__actions">
          {/* Toggle-driven mobile menu with smooth overlay */}
          <div className="mobile-menu">
            <button
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="icon-button"
              onClick={() =>
                setMobileMenuState({
                  isOpen: !mobileMenuOpen,
                  pathname,
                })
              }
              type="button"
            >
              {mobileMenuOpen ? <X size={23} strokeWidth={2.2} /> : <Menu size={23} strokeWidth={2.2} />}
            </button>

            {mobileMenuOpen && (
              <div className="mobile-menu__panel" style={{ display: "grid" }}>
                <div className="mobile-menu__links">
                  {navigation.map((item) => (
                    <div className="mobile-menu__group" key={item.label}>
                      <Link
                        className={`mobile-menu__link${isActive(item.href) ? " active" : ""}`}
                        href={item.href}
                        onClick={closeNavigationMenus}
                      >
                        <span>{item.label}</span>
                      </Link>
                      {item.children && (
                        <div className="mobile-menu__children">
                          {item.children.map((child) => (
                            <Link
                              className="mobile-menu__child"
                              href={child.href}
                              key={child.label}
                              onClick={closeNavigationMenus}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mobile-menu__actions">
                  <span className="mobile-menu__social-label">Connect with us</span>
                  <SocialLinks className="mobile-menu__social" linkClassName="mobile-menu__social-link" />
                </div>
              </div>
            )}
          </div>

          <Button href="/contact">Get Free Quote</Button>
          <Button href="/contact" variant="outline">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
