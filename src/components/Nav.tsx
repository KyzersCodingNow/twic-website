"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "/episodes", label: "Episodes" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1f1f1f] bg-ink/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-display text-2xl font-black tracking-tightest text-bone"
          onClick={() => setOpen(false)}
        >
          {SITE.wordmark}
          <span className="text-gold">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-bold uppercase tracking-wide transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-bone"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-bone" />
            <span className="block h-0.5 w-6 bg-bone" />
            <span className="block h-0.5 w-6 bg-bone" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="border-t border-[#1f1f1f] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-[#1f1f1f] py-3 font-display text-sm font-bold uppercase tracking-wide ${
                    active ? "text-gold" : "text-bone"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
