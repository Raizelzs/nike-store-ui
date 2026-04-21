import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto grid w-[min(1200px,92%)] grid-cols-1 gap-10 py-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <h3 className="section-title text-5xl">NKX.</h3>
          <p className="mt-3 max-w-sm text-white/60">
            Premium sneaker architecture crafted for relentless momentum.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <button
                key={i}
                className="rounded-md border border-white/20 p-2 text-white/70 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        {["Shop", "Company", "Support"].map((group) => (
          <div key={group}>
            <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">{group}</h4>
            <ul className="space-y-2 text-white/80">
              {["About", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a className="group inline-flex items-center gap-2" href="#">
                    <span className="w-0 overflow-hidden text-[var(--accent)] transition-all group-hover:w-3">-></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-3 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NKX. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
