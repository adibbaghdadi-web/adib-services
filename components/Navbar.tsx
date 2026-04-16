"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
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
      setScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#07070a]/85 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        import Image from "next/image";

<Link href="/">
  <Image 
    src="/logo.svg" 
    alt="ADIB" 
    width={45} 
    height={45} 
    className="logo"
  />
</Link>

        <nav className="hidden items-center gap-6 md:flex">
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
          <a
            href="https://wa.me/905362966530"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            واتساب
          </a>

          <Link
            href="/request"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-[#0b0b10]/95 backdrop-blur-2xl md:hidden"
          >
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

              <a
                href="https://wa.me/905362966530"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                تواصل واتساب
              </a>

              <Link
                href="/request"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90"
              >
                اطلب الآن
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}