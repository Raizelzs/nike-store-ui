"use client";

import { useEffect, useRef, useState } from "react";

const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"default" | "hover" | "link">("default");

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!touch);
    if (touch) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 6}px, ${mouse.y - 6}px)`;
      }
    };

    const animate = () => {
      ring.x = lerp(ring.x, mouse.x, 0.16);
      ring.y = lerp(ring.y, mouse.y, 0.16);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x - 20}px, ${ring.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursor = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      setMode(cursor === "hover" || cursor === "link" ? cursor : "default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[120] h-3 w-3 rounded-full bg-white mix-blend-difference transition-opacity ${mode === "link" ? "opacity-0" : "opacity-100"}`}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[119] border border-white/70 transition-all duration-200 ${
          mode === "link" ? "h-10 w-2 rounded-sm" : mode === "hover" ? "h-16 w-16 rounded-full" : "h-10 w-10 rounded-full"
        }`}
      />
    </>
  );
}
