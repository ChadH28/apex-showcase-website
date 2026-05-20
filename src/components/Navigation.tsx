"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Residences", href: "#residences" },
  { label: "The Estate", href: "#estate" },
  { label: "Private Tours", href: "#tours" },
];

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.34em] text-slate-950 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-slate-700"
        >
          APEX PROPERTY
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.28em] text-slate-500 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -1 }}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm uppercase tracking-[0.22em] text-slate-950 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-slate-300 hover:bg-slate-100"
        >
          Book Private Viewing
        </motion.a>
      </div>
    </header>
  );
}
