"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { useParallax } from "@/hooks/useParallax";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const offset = useParallax(0.3);

  return (
    <section className="relative grid-overlay min-h-screen overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 font-['var(--font-bebas)'] text-[clamp(140px,24vw,420px)] leading-none text-white/[0.04]">
        97
      </div>

      <LazyMotion features={domAnimation}>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1200px,92%)] content-center gap-10"
        >
          <m.p variants={fadeUp} className="text-xs uppercase tracking-[0.32em] text-white/60">
            Crafted for speed. built for statement.
          </m.p>
          <m.h1 variants={fadeUp} className="section-title leading-[0.88]">
            <span className="block text-[clamp(80px,14vw,180px)]">UNLOCK</span>
            <span
              className="block text-[clamp(80px,14vw,180px)] text-transparent"
              style={{ WebkitTextStroke: "2px var(--white)" }}
            >
              THE <span className="text-[var(--accent)]">MOTION</span>
            </span>
          </m.h1>
          <m.div variants={fadeUp}>
            <MagneticBtn
              label="Shop Collection"
              className="border border-white/30 bg-black/40 text-white"
            />
          </m.div>
        </m.div>
      </LazyMotion>

      <div className="absolute bottom-10 left-6 flex items-end gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
        <span className="h-12 w-px animate-pulse bg-white/40" />
        Scroll
      </div>
      <div className="absolute bottom-10 right-6 text-right">
        <p className="section-title text-5xl text-[var(--accent)]">2,400+</p>
        <p className="text-xs uppercase tracking-[0.26em] text-white/50">Styles</p>
      </div>
    </section>
  );
}
