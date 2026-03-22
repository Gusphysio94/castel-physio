"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/kinesitherapie", label: "Kinésithérapie" },
  { href: "/formations", label: "Formations" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(10,25,41,0.08)] border-b border-navy-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]">
              <span className="text-amber-400 font-bold text-xl font-display italic">C</span>
            </div>
            <div className="leading-none">
              <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-navy-900" : "text-white"}`}>
                Castel
              </span>
              <span className="font-bold text-lg tracking-tight text-amber-500"> Physio</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-navy-600 hover:text-amber-500 hover:bg-amber-50"
                    : "text-navy-200 hover:text-amber-400 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.q-top.be/online-planner-v2/FR/?root=kq46938"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 btn-magnetic ${
                scrolled
                  ? "text-navy-800 border border-navy-200 hover:border-navy-300 hover:bg-navy-50"
                  : "text-white border border-white/25 hover:border-white/50 hover:bg-white/10"
              }`}
            >
              Prendre RDV
            </a>
            <Link
              href="/formations"
              className="px-4 py-2 text-sm font-semibold bg-amber-500 text-navy-950 rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-sm hover:shadow-md btn-magnetic"
            >
              Formations
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-navy-700" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-navy-700" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-navy-700" : "bg-white"} ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-navy-700" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-navy-100/50 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-navy-700 font-medium py-2.5 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-navy-100 flex flex-col gap-2.5 mt-2">
              <a
                href="https://www.q-top.be/online-planner-v2/FR/?root=kq46938"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-3 text-sm font-semibold text-navy-800 border border-navy-200 rounded-xl hover:bg-navy-50"
                onClick={() => setMobileOpen(false)}
              >
                Prendre RDV
              </a>
              <Link
                href="/formations"
                className="text-center px-4 py-3 text-sm font-semibold bg-amber-500 text-navy-950 rounded-xl shadow-sm"
                onClick={() => setMobileOpen(false)}
              >
                Formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
