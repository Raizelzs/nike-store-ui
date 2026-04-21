import MagneticBtn from "@/components/ui/MagneticBtn";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--accent)] py-16 text-black">
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-['var(--font-bebas)'] text-[clamp(180px,30vw,400px)] opacity-10">
        NOW
      </span>
      <div className="relative z-10 mx-auto flex w-[min(1200px,92%)] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="section-title text-6xl sm:text-7xl">Move Different.</h2>
        <MagneticBtn
          label="Grab Your Pair"
          className="bg-black text-[var(--accent)] shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
        />
      </div>
    </section>
  );
}
