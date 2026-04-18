"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "التواصل" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header premium-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <div className="brand-box">
            <Image src="/logo.svg" alt="ADIB" width={54} height={54} />
          </div>
        </Link>

        <nav className="desktop-nav premium-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/request" className="button button-light nav-cta">
            اطلب الآن
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="فتح القائمة"
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={pathname === link.href ? "mobile-link active" : "mobile-link"}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/request"
              onClick={() => setMenuOpen(false)}
              className="button button-primary full-width"
            >
              اطلب الآن
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}