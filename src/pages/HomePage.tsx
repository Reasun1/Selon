import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Scissors, Leaf, Sparkles, Coffee } from "lucide-react";
import hero from "@/assets/hero-salon.jpg";
import hair from "@/assets/service-hair.jpg";
import nails from "@/assets/service-nails.jpg";
import facial from "@/assets/service-facial.jpg";
import station from "@/assets/salon-station.jpg";

export function HomePage() {
  // Dynamic SEO Optimization
  useEffect(() => {
    document.title = "Maison Lior | Hair, Skin & Nails Luxury Salon Cape Town";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Step into Maison Lior, Kloof Street's premier luxury salon. Explore our handcrafted menu of hair styling, facials, and manicures, designed to enhance your natural grace."
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" id="hero-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24 md:pb-32">
          <div>
            <p className="hairline">Cape Town · Est. 2014</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
              The salon that <em className="italic text-foreground/90">feels like home.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Walk in to fresh espresso, soft music and a stylist who remembers your name.
              Leave with hair, skin and nails you’ll love until your next visit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                id="btn-book-hero"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-opacity duration-300"
              >
                Book a Chair <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                id="btn-menu-hero"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-muted transition-colors duration-300"
              >
                Our Menu
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>★ 4.9 · 320+ reviews</span>
              <span className="hidden h-px w-10 bg-border sm:block" />
              <span>10 years on Kloof Street</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <img
                src={hero}
                alt="Inside Maison Lior salon, premium styling equipment and aesthetic interior"
                width={1600}
                height={1100}
                className="h-full w-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-sm bg-background border border-border/80 px-6 py-5 shadow-lg md:block">
              <p className="hairline">Today</p>
              <p className="mt-1 font-serif text-xl">Walk-ins welcome</p>
              <p className="text-xs text-muted-foreground">Chairs open from 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="border-y border-border bg-muted/40" id="promise-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {[
            { icon: Scissors, title: "Considered Craft", text: "Bespoke services — never rushed, never templated." },
            { icon: Leaf, title: "Clean Botanicals", text: "Cruelty-free formulas that respect skin and scalp." },
            { icon: Sparkles, title: "Honest Counsel", text: "We recommend what suits you, not the menu." },
            { icon: Coffee, title: "A Warm Welcome", text: "Espresso, tea, soft music and a comfy robe." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <Icon className="text-foreground transition-transform duration-300 group-hover:scale-110" size={22} strokeWidth={1.4} />
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-24" id="featured-services">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="hairline">Our Rituals</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl md:text-5xl">
              A small, focused menu — delivered exceptionally.
            </h2>
          </div>
          <Link
            to="/services"
            id="link-all-menu"
            className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors duration-300"
          >
            See full menu <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { img: hair, title: "Hair Artistry", price: "From R650", id: "card-hair" },
            { img: facial, title: "Skin & Facials", price: "From R780", id: "card-skin" },
            { img: nails, title: "Nail Atelier", price: "From R320", id: "card-nails" },
          ].map((s) => (
            <Link to="/services" key={s.title} id={s.id} className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-serif text-2xl group-hover:text-muted-foreground transition-colors duration-300">{s.title}</h3>
                <span className="text-sm text-muted-foreground">{s.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Signature Experience Section */}
      <section className="bg-accent/30" id="signature-experience">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
            <img
              src={station}
              alt="Styling station in Cape Town salon"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <div>
            <p className="hairline">The Maison Lior Ritual</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">Every visit, the same gentle rhythm.</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["A warm welcome", "Robe, slippers and your drink of choice while we chat."],
                ["Honest consultation", "We map the visit around your hair, your life, your time."],
                ["Quiet craft", "Sit back. Soft music, no rush — just careful hands at work."],
                ["A finishing touch", "Styling tips, take-home recommendations and a fresh espresso."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-serif text-2xl text-muted-foreground/60">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted/40" id="testimonial-section">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="hairline justify-center">Guest Letters</p>
          <blockquote className="mt-8 font-serif text-3xl leading-snug text-balance md:text-4xl">
            “The most thoughtful salon in Cape Town. I left looking like myself — only somehow more so.”
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">— Amara K., Sea Point</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center" id="cta-section">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl md:text-5xl">Reserve your moment.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Same-week appointments available. Walk-ins welcome on quiet weekdays.
        </p>
        <Link
          to="/book"
          id="btn-book-cta"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-opacity duration-300"
        >
          Book now <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
