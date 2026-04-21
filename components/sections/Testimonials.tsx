"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const data = [
  { name: "AL", rating: 5, quote: "The comfort is unreal and the silhouette is premium.", product: "Eclipse Carbon" },
  { name: "RM", rating: 5, quote: "Fast shipping, perfect fit, and insane traction.", product: "Air Zephyr 01" },
  { name: "QT", rating: 4, quote: "Looks futuristic and works for daily wear.", product: "Street Vortex" }
];

export default function Testimonials() {
  return (
    <section className="mx-auto w-[min(1400px,96%)] py-20">
      <h2 className="section-title mb-8 text-6xl sm:text-7xl">Voices</h2>
      <LazyMotion features={domAnimation}>
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[2px]"
        >
          {data.map((item) => (
            <m.article key={item.name} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
              <GlassCard className="relative h-full p-6">
                <span className="pointer-events-none absolute right-4 top-0 text-8xl text-white/[0.04]">"</span>
                <p className="mb-4 text-[var(--accent)]">{"★".repeat(item.rating)}</p>
                <p className="mb-6 text-white/80">{item.quote}</p>
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-full bg-[var(--accent2)] font-bold text-black">
                    {item.name}
                  </span>
                  <span className="text-sm uppercase tracking-[0.2em] text-white/70">Verified Buyer</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Purchased: {item.product}</p>
              </GlassCard>
            </m.article>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
