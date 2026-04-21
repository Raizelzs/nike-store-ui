"use client";

import { HTMLAttributes } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";

type MagneticBtnProps = HTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function MagneticBtn({ label, className = "", ...props }: MagneticBtnProps) {
  const { transform, handlers } = useMagneticHover(10);

  return (
    <button
      {...props}
      {...handlers}
      data-cursor="hover"
      className={`clip-btn relative overflow-hidden px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 ${className}`}
      style={{ transform }}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 before:absolute before:inset-0 before:bg-[var(--accent)]/30 hover:translate-x-0" />
    </button>
  );
}
