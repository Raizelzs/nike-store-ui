"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/useCart";

const links = ["Collections", "Men", "Women", "Stories"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCart((state) => state.totalItems);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-white/10 bg-black/50 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-[min(1200px,92%)] items-center justify-between">
        <button data-cursor="link" className="section-title text-4xl tracking-widest">
          NKX<span className="text-[var(--accent)]">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                data-cursor="link"
                href="#"
                className="group relative text-sm uppercase tracking-[0.2em] text-white/80"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button data-cursor="link" className="relative rounded-full border border-white/20 p-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 rounded-full bg-[var(--accent)] px-1.5 text-xs font-bold text-black">
              {totalItems}
            </span>
          </button>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 grid place-content-center bg-black/95 md:hidden">
          <ul className="space-y-8 text-center">
            {links.map((link) => (
              <li key={link}>
                <a onClick={() => setOpen(false)} className="section-title text-5xl text-white/90" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
