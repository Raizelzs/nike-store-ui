"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function BrandStory() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative flex items-center justify-center overflow-hidden bg-[#0b0b0b] p-8">
        <span className="pointer-events-none absolute font-['var(--font-bebas)'] text-[clamp(180px,28vw,420px)] text-white/[0.03]">
          AIR
        </span>
        <Image
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
          alt="Brand shoe"
          width={800}
          height={550}
          className="float-y relative z-10 object-contain drop-shadow-[0_20px_40px_rgba(232,255,0,0.15)]"
        />
      </div>

      <LazyMotion features={domAnimation}>
        <m.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="relative grid content-center gap-8 bg-[#070707] p-8 md:p-16">
          <span className="pointer-events-none absolute right-8 top-8 font-['var(--font-bebas)'] text-[clamp(100px,16vw,220px)] text-white/[0.04]">
            1964
          </span>
          {[1, 2].map((n) => (
            <m.p key={n} variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-white/75">
              NKX fuses modern sport-tech with street couture, turning every run into a design statement and every step into velocity.
            </m.p>
          ))}
          <m.div variants={fadeUp} className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              ["140M+", "Customers"],
              ["190+", "Countries"],
              ["4.9", "Avg. Rating"]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="section-title text-5xl text-[var(--accent)]">{value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
              </div>
            ))}
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
