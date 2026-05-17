import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { serviceCategories, ZAR } from "../data/salonData";

export function ServicesPage() {
  // Dynamic SEO Optimization
  useEffect(() => {
    document.title = "Services & Pricing | Maison Lior Salon Cape Town";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "View the premium services menu and transparent pricing for Maison Lior. Precision cuts, hair coloring, professional facials, manicures, pedicures, and brow sculpting."
      );
    }
  }, []);

  return (
    <>
      {/* Services Header */}
      <section className="border-b border-border bg-muted/40" id="services-header">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="hairline">Menu</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl md:text-6xl text-balance">
            Services & pricing.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            All prices in South African Rand (ZAR) and inclusive of customized consultation.
            Final pricing may vary with hair length, density or product choice.
          </p>
        </div>
      </section>

      {/* Services Categories & Menu List */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="services-menu-list">
        <div className="space-y-24">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.id} className="grid gap-10 md:grid-cols-[1fr_2fr]">
              {/* Category Sticky Sidebar */}
              <div className="md:sticky md:top-28 md:self-start">
                <p className="hairline">0{idx + 1}</p>
                <h2 className="mt-4 font-serif text-4xl">{cat.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
              </div>

              {/* Services List inside Category */}
              <ul className="divide-y divide-border">
                {cat.services.map((s) => (
                  <li key={s.name} className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:gap-8 hover:bg-muted/10 transition-colors duration-150 px-2 rounded-sm">
                    <div>
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-serif text-xl">{s.name}</h3>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                          {s.duration}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">{s.description}</p>
                    </div>
                    <div className="font-serif text-2xl md:text-right mt-1 md:mt-0">
                      {ZAR(s.price)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Start Rituals Callout */}
        <div className="mt-24 rounded-sm border border-border bg-accent/30 p-10 text-center shadow-sm">
          <h3 className="font-serif text-3xl">Not sure where to start?</h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Book a complimentary 15-minute consultation — we’ll help you choose the right ritual for your hair, skin, or nails.
          </p>
          <Link
            to="/book"
            id="btn-book-consult"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-opacity duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
