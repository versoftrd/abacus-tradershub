import { useState } from "react";
import { useLocation } from "wouter";

const links = [
  { href: "/", label: "Home" },
  { href: "/abacus-experience", label: "Abacus Experience" },
  { href: "/market-open", label: "Market Open" },
  { href: "/campus-virtual", label: "Campus Virtual" },
  { href: "/traders-hub", label: "Traders Hub" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f1f22] bg-[rgba(17,17,17,0.7)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* LOGO */}
          <a href="/" className="relative select-none" data-testid="logo">
            <div className="text-2xl font-extrabold tracking-tight text-white leading-none" data-testid="logo-traders">
              TRADERS
            </div>
            <span className="absolute -bottom-2 left-[84px] text-[#6ef7a7] italic font-semibold text-xl" data-testid="logo-hub">
              Hub
            </span>
          </a>

          {/* CENTER TABS (desktop) */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-2 rounded-full bg-transparent">
              {links.map((l) => {
                const active = location === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={[
                        "px-5 py-3 rounded-full text-[18px] font-semibold tracking-tight transition",
                        "hover:bg-[#15181b] focus:outline-none focus:ring-2 focus:ring-sky-500/50",
                        active ? "bg-[#1f2226] text-white shadow-inner" : "text-zinc-200",
                      ].join(" ")}
                      data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/login"
              className="px-6 py-3 rounded-full bg-[#1f2428] text-[18px] font-semibold text-zinc-200 hover:bg-[#242a2f] transition focus:ring-2 focus:ring-sky-500/50"
              data-testid="button-login"
            >
              Login
            </a>
            <a
              href="/get-started"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#36a2ff] to-[#7cc6ff] text-[18px] font-semibold text-white shadow hover:opacity-95 transition focus:ring-2 focus:ring-sky-300/60"
              data-testid="button-get-started"
            >
              Get Started
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-3 hover:bg-[#15181b] focus:ring-2 focus:ring-sky-500/50"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            <svg width="24" height="24" fill="currentColor" className="text-zinc-200">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      {open && (
        <div className="md:hidden border-t border-[#1f1f22] bg-[#0e1012]" data-testid="mobile-menu-panel">
          <div className="px-6 py-4 space-y-2">
            {links.map((l) => {
              const active = location === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block px-4 py-3 rounded-xl text-base font-medium",
                    active ? "bg-[#1f2226] text-white" : "text-zinc-200 hover:bg-[#15181b]",
                  ].join(" ")}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {l.label}
                </a>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-[#1f2428] text-zinc-200 text-center"
                data-testid="mobile-button-login"
              >
                Login
              </a>
              <a
                href="/get-started"
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-[#36a2ff] to-[#7cc6ff] text-white text-center"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
