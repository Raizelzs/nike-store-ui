"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import { useCart } from "@/lib/useCart";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4MDAnIGhlaWdodD0nNjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMjIyJy8+PC9zdmc+";

export default function ProductGrid() {
  return (
    <section className="mx-auto w-[min(1400px,96%)] py-20">
      <h2 className="section-title mb-8 text-6xl sm:text-7xl">Latest Drops</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[2px]">
        {products.map((product) => (
          <ProductCard key={product.id} productId={product.id} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ productId }: { productId: string }) {
  const addItem = useCart((state) => state.addItem);
  const product = useMemo(() => products.find((p) => p.id === productId), [productId]);
  const [selected, setSelected] = useState(0);
  const { transform, handlers } = useMagneticHover(14);

  if (!product) return null;

  return (
    <article
      {...handlers}
      style={{ transform }}
      className="group relative overflow-hidden border border-white/5 bg-[var(--gray-dark)] p-4 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_42px_rgba(0,0,0,0.45)]"
    >
      <span
        className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${
          product.badge === "NEW" ? "bg-[var(--accent)] text-black" : "bg-[var(--accent2)] text-white"
        }`}
      >
        {product.badge}
      </span>

      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-black/60">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover transition duration-500 group-hover:scale-110 group-hover:-rotate-2"
        />
        <button
          data-cursor="hover"
          onClick={() => addItem({ id: product.id, image: product.image, name: product.name, price: product.price })}
          className="absolute bottom-3 right-3 translate-y-3 rounded-full bg-black/80 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          +
        </button>
      </div>

      <p className="text-sm uppercase tracking-[0.2em] text-white/50">{product.category}</p>
      <h3 className="section-title text-4xl">{product.name}</h3>
      <p className="mb-4 text-sm text-white/60">{product.description}</p>
      <div className="mb-4 flex gap-2">
        {product.colors.map((color, idx) => (
          <button
            key={color}
            onClick={() => setSelected(idx)}
            className={`h-4 w-4 rounded-full border ${selected === idx ? "border-white" : "border-transparent"}`}
            style={{ backgroundColor: color }}
            aria-label={`Color ${idx + 1}`}
          />
        ))}
      </div>
      <div className="flex items-end gap-3">
        <span className="section-title text-4xl">${product.price}</span>
        <span className="text-white/40 line-through">${product.oldPrice}</span>
      </div>
    </article>
  );
}
