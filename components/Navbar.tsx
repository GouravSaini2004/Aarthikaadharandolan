 "use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "होम" },
  { href: "/praveen-arora", label: "प्रवीण अरोड़ा" },
  { href: "/support", label: "सहयोग करें" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden">
  <Image
    src="/images/logo.png"
    alt="आर्थिक आधार पर आरक्षण आंदोलन"
    fill
    className="object-contain"
    sizes="44px"
  />
</span>
          <span className="hidden sm:block">
            <span className="block text-[11px] font-bold uppercase tracking-[.2em] text-[var(--red)]">
              AAA 2026
            </span>
            <span className="block text-sm font-extrabold text-[var(--navy)]">
              आर्थिक आधार पर आरक्षण
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-700 transition hover:text-[var(--red)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="inline-flex items-center gap-1 rounded-full bg-[var(--red)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[var(--red-dark)]"
          >
            सहयोग करें <ArrowUpRight size={16} />
          </Link>
        </nav>

        <button
          aria-label="मेनू खोलें"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="container-page flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
