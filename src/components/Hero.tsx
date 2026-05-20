"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF7F1] px-6 py-28 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_35%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <motion.div variants={item} className="flex flex-col justify-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-slate-600">
            Curated architectural narratives
          </div>

          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            ARCHITECTURAL MANIFESTOS FOR THE MODERN PURIST
          </h1>

          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-8 max-w-[65ch] text-base leading-8 text-slate-700 md:text-lg"
          >
            A quiet expression of refined luxury. Each residence is composed
            with sculpted light, material precision, and a restrained sense of
            drama that allows space to breathe.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_120px_rgba(15,23,42,0.12)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 opacity-90" />
          <div className="relative aspect-[4/5] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Partial architectural composition"
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
