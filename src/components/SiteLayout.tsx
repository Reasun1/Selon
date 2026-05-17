import React, { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Scissors, MapPin, Phone, Mail } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo brand */}
          <Link to="/" className="flex items-center gap-2.5" id="brand-logo">
            <Scissors size={18} className="text-foreground" strokeWidth={1.4} />
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl tracking-tight">Maison&nbsp;Lior</span>
              <span className="hairline text-[0.55rem] font-sans">Salon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex" id="desktop-nav">
            {nav.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-250 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/book"
              id="btn-header-book"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
            >
              Book
            </Link>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            className="md:hidden text-foreground hover:opacity-85 transition-opacity"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-t border-border bg-background md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col p-6" id="mobile-nav">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm uppercase tracking-[0.18em] font-medium text-foreground hover:text-muted-foreground border-b border-border/40 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                id="btn-mobile-book"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground font-semibold shadow-sm"
              >
                Book
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Page Area */}
      <main className="flex-1 animate-in fade-in duration-500 ease-out">{children}</main>

      {/* Premium Footer */}
      <footer className="border-t border-border bg-muted/40" id="footer-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-serif text-2xl">
              <Scissors size={18} strokeWidth={1.4} /> Maison Lior
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Step into our warm and welcoming sanctuary in the heart of Cape Town.
              We are dedicated to enhancing your natural beauty with care, comfort, and exceptional craft.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Link"
                className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Link"
                className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="hairline">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 shrink-0 text-foreground/75" />
                <span>42 Kloof Street, Gardens, Cape Town</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-foreground/75" />
                <span>+27 21 123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-foreground/75" />
                <span>hello@maisonlior.co.za</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="hairline">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri · 09:00 – 19:00</li>
              <li>Saturday · 09:00 – 17:00</li>
              <li>Sunday · By appointment</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Maison Lior Salon. All rights reserved.</p>
          <p>
            Crafted with care by <a id="upscale-link" href="https://upscaleda.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors underline decoration-white/20 underline-offset-4 inline-block">UPSCALE DIGITAL</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
