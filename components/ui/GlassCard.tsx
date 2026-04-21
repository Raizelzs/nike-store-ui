import { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
