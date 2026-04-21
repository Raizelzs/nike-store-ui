"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { products } from "@/lib/products";

export default function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 560, behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-[min(1400px,96%)] py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="section-title text-6xl sm:text-7xl">Featured</h2>
        <div className="flex gap-3">
          <button onClick={() => scrollByCard(-1)} className="rounded-full border border-white/20 p-3 active:scale-90">
            <ArrowLeft />
          </button>
          <button onClick={() => scrollByCard(1)} className="rounded-full border border-white/20 p-3 active:scale-90">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="group relative h-[500px] min-w-[86vw] snap-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#050505] p-8 md:min-w-[520px]"
          >
            <h3 className="section-title text-6xl text-white/80">{product.name}</h3>
            <p className="max-w-xs text-white/60">{product.description}</p>
            <div className="absolute inset-x-0 bottom-8 top-24">
              <Image src={product.image} alt={product.name} fill sizes="520px" className="float-y object-contain transition duration-300 group-hover:-translate-y-2" />
              <div className="absolute bottom-2 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-[var(--accent)]/30 blur-2xl transition duration-300 group-hover:bg-[var(--accent2)]/40" />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded bg-white/10">
        <div className="h-full w-1/3 bg-[var(--accent)]" />
      </div>
    </section>
  );
}
