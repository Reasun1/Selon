import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  // Dynamic SEO Optimization
  useEffect(() => {
    document.title = "Visit Us | Maison Lior Salon Cape Town";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Get in touch with Maison Lior on Kloof Street, Gardens. View our operating hours, call us, or send an instant booking inquiry message."
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Contact Header */}
      <section className="border-b border-border bg-muted/40" id="contact-header">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="hairline">Get in touch</p>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl">Visit the salon.</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Pop in for a coffee and a consultation — or send us a note and we’ll
            be in touch within a day.
          </p>
        </div>
      </section>

      {/* Main Grid Contact & Form */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2" id="contact-info-form">
        {/* Left Side: Contact Information */}
        <div className="space-y-8">
          {[
            { icon: MapPin, title: "Visit", lines: ["42 Kloof Street", "Gardens, Cape Town 8001"] },
            { icon: Phone, title: "Call", lines: ["+27 21 123 4567"] },
            { icon: Mail, title: "Email", lines: ["hello@maisonlior.co.za"] },
            { icon: Clock, title: "Hours", lines: ["Mon – Fri · 09:00 – 19:00", "Saturday · 09:00 – 17:00", "Sunday · by appointment"] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Icon size={16} />
              </div>
              <div>
                <h3 className="font-serif text-xl">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Interactive Google Map */}
          <div className="aspect-[16/9] overflow-hidden rounded-sm border border-border shadow-sm bg-muted">
            <iframe
              title="Google Map showing Kloof Street, Cape Town"
              src="https://www.google.com/maps?q=42+Kloof+Street+Gardens+Cape+Town&output=embed"
              className="h-full w-full grayscale-[15%] contrast-[110%]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-card p-8 shadow-sm"
            id="form-contact-msg"
          >
            <h2 className="font-serif text-3xl">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one business day.</p>
            
            <div className="mt-6 grid gap-4">
              <Field label="Name" name="name" id="input-contact-name" required />
              <Field label="Email" name="email" type="email" id="input-contact-email" required />
              <Field label="Phone" name="phone" type="tel" id="input-contact-phone" />
              
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  id="input-contact-msg"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-all"
                  placeholder="Tell us about the services you're interested in..."
                />
              </div>

              <button
                type="submit"
                id="btn-contact-submit"
                className="mt-2 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-all font-medium"
              >
                Send Message
              </button>

              {sent && (
                <div className="mt-4 rounded-sm bg-accent/40 border border-accent p-4 text-sm text-foreground">
                  Thank you — your message has been sent successfully. We will be in touch shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  id,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  id?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        id={id}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-all"
      />
    </div>
  );
}
