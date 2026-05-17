import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { team } from "../data/salonData";
import about from "@/assets/about-salon.jpg";
import tools from "@/assets/salon-tools.jpg";
import station from "@/assets/salon-station.jpg";
import hero from "@/assets/hero-salon.jpg";

export function AboutPage() {
  // Dynamic SEO Optimization
  useEffect(() => {
    document.title = "Our Story & Stylists | Maison Lior Salon Cape Town";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Meet the dedicated master stylists, colourists, and skin therapists of Maison Lior. Founded in 2014 by Lior Bekker, we are Cape Town's premier luxury salon."
      );
    }
  }, []);

  return (
    <>
      {/* Story Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28" id="about-story">
        <div>
          <p className="hairline">Our Story</p>
          <h1 className="mt-6 font-serif text-5xl text-balance md:text-6xl">
            A salon built around the guest.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Maison Lior was founded in 2014 by stylist Lior Bekker with a simple intent —
            create a space that feels less like a salon, and more like a quiet retreat.
            A decade on, we’re a small, devoted team of artists known for honest
            consultation, considered craft and a warm welcome.
          </p>
          <p className="mt-4 text-muted-foreground">
            Tucked into a sunlit corner of Kloof Street, the salon balances
            understated luxury with everyday ease — whether it’s a fresh cut
            before a celebration or a quiet hour to yourself.
          </p>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
          <img
            src={about}
            alt="Lounge welcome area of Maison Lior in Cape Town"
            loading="lazy"
            width={1400}
            height={1000}
            className="h-full w-full object-cover hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Meet Team Section */}
      <section className="border-y border-border bg-muted/40" id="about-team">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="hairline">Meet the team</p>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-sm border border-border/80 bg-background p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent font-serif text-2xl text-foreground">
                  {m.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-serif text-xl">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Salon Gallery Section */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="about-gallery">
        <p className="hairline">Inside the salon</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[tools, station, hero].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-sm shadow-sm bg-muted group">
              <img
                src={src}
                alt="High-end salon interior details and premium hairdressing tools"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center" id="about-cta">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl md:text-5xl">We’d love to meet you.</h2>
        <Link
          to="/book"
          id="btn-book-about"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-opacity duration-300"
        >
          Book your visit
        </Link>
      </section>
    </>
  );
}
