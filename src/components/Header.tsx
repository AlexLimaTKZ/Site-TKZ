"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  function isActiveHref(href: string) {
    if (href.includes("#")) return false;
    const route = href.split("#")[0] || "/";
    return pathname === route;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg-element/80 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="group flex-shrink-0" aria-label="Ir para a home">
          <Image
            src="/images/LogoTKZ.png"
            alt="Logo TKZ E-SPORTS"
            width={80}
            height={80}
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
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
                  <button
                    className={`group relative flex items-center gap-1 rounded-md px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                      link.children.some((child) => isActiveHref(child.href))
                        ? "text-accent"
                        : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        link.children.some((child) => isActiveHref(child.href)) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
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
                              className={`block rounded-lg px-4 py-2.5 text-sm transition-all duration-200 hover:translate-x-1 hover:bg-accent-glow hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                                isActiveHref(child.href) ? "bg-accent-glow text-accent" : "text-text-secondary"
                              }`}
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
                    className={`group relative rounded-md px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                      isActiveHref(link.href!) ? "text-accent" : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        isActiveHref(link.href!) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/streamers"
              className={`group relative overflow-hidden rounded-lg border px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-twitch hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-twitch/50 ${
                isActiveHref("/streamers") ? "border-twitch bg-twitch/10 text-text" : "border-text/20 text-text"
              }`}
            >
              <span className="absolute inset-0 -translate-x-full bg-twitch transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10">Streamers</span>
            </Link>
            <Link
              href="https://discord.gg/5CnzeWUJPG"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_0_22px_rgba(0,204,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Entrar no Discord
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
                        className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent-glow hover:text-accent ${
                          isActiveHref(child.href) ? "bg-accent-glow text-accent" : "text-text-secondary"
                        }`}
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
                    className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent-glow hover:text-accent ${
                      isActiveHref(link.href!) ? "bg-accent-glow text-accent" : "text-text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  href="/streamers"
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg border px-4 py-2.5 text-center text-sm font-semibold transition-all hover:bg-twitch hover:text-text ${
                    isActiveHref("/streamers") ? "border-twitch bg-twitch text-text" : "border-twitch bg-twitch/10 text-twitch"
                  }`}
                >
                  Streamers
                </Link>
                <Link
                  href="https://discord.gg/5CnzeWUJPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-bg transition-all hover:bg-accent-dark"
                >
                  Entrar no Discord
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
