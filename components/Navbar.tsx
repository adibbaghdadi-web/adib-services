"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#07070a]/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="ADIB" width={52} height={52} className="logo" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition ${
                  active ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 right-0 h-[2px] w-full rounded-full bg-white" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/request"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.03]"
          >
            اطلب الآن
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="فتح القائمة"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0b0b10]/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/request"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90"
            >
              اطلب الآن
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}