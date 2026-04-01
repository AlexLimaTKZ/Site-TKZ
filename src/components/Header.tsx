"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Sobre",
    children: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Times", href: "/times" },
      { label: "Redes Sociais", href: "/redes-sociais" },
      { label: "Parceiros", href: "/#parceiros" },
    ],
  },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Staff", href: "/staff" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg-element/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/LogoTKZ.png"
            alt="Logo TKZ E-SPORTS"
            width={80}
            height={80}
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 min-w-[180px] rounded-xl border border-border bg-bg-element/95 p-2 shadow-2xl backdrop-blur-xl"
                      >
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-text-secondary transition-all hover:bg-accent-glow hover:text-accent"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href!}
                    className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/streamers"
              className="group relative overflow-hidden rounded-lg border border-text/20 px-5 py-2 text-sm font-semibold text-text transition-all hover:border-twitch hover:text-text"
            >
              <span className="absolute inset-0 -translate-x-full bg-twitch transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10">Streamers</span>
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-bg transition-all hover:bg-accent-dark hover:shadow-[0_0_20px_rgba(0,204,255,0.3)]"
            >
              Entrar
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-bg-element/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-accent-glow hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-accent-glow hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  href="/streamers"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-twitch bg-twitch/10 px-4 py-2.5 text-center text-sm font-semibold text-twitch transition-all hover:bg-twitch hover:text-text"
                >
                  Streamers
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-bg transition-all hover:bg-accent-dark"
                >
                  Entrar
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
