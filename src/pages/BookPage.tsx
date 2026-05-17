import { useState, useMemo, useEffect } from "react";
import { Check } from "lucide-react";
import { serviceCategories, ZAR } from "../data/salonData";

const TIMES = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];

export function BookPage() {
  const allServices = useMemo(
    () => serviceCategories.flatMap((c) => c.services.map((s) => ({ ...s, category: c.title }))),
    []
  );

  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState({ name: "", email: "", phone: "", notes: "" });
  const [done, setDone] = useState(false);

  // Dynamic SEO Optimization
  useEffect(() => {
    document.title = "Book an Appointment | Maison Lior Salon Cape Town";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Reserve your chair at Maison Lior. Secure your premium hair, skin, or nail treatment appointment instantly with our live online scheduling system."
      );
    }
  }, []);

  const selected = allServices.find((s) => s.name === service);
  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const submit = () => setDone(true);

  if (done) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-32 text-center" id="booking-success-screen">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-foreground">
          <Check />
        </div>
        <h1 className="mt-6 font-serif text-4xl">You’re booked.</h1>
        <p className="mt-4 text-muted-foreground">
          A confirmation has been sent to <span className="text-foreground font-medium">{info.email}</span>.
          We can’t wait to welcome you on <span className="text-foreground font-medium">{date}</span> at <span className="text-foreground font-medium">{time}</span>.
        </p>
        <div className="mt-8 rounded-sm border border-border bg-muted/40 p-6 text-left shadow-sm">
          <p className="hairline">Reservation Summary</p>
          <div className="mt-4 grid gap-2.5 text-sm">
            <Line label="Service" value={selected?.name ?? ""} />
            <Line label="Category" value={selected?.category ?? ""} />
            <Line label="Duration" value={selected?.duration ?? ""} />
            <Line label="Price" value={selected ? ZAR(selected.price) : ""} />
            <Line label="When" value={`${date} · ${time}`} />
            <Line label="Guest" value={info.name} />
            {info.phone && <Line label="Phone" value={info.phone} />}
            {info.notes && <Line label="Notes" value={info.notes} />}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Booking Header */}
      <section className="border-b border-border bg-muted/40" id="booking-header">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="hairline">Reserve</p>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl">Book your chair.</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A few quick steps — your luxury reservation is processed and held instantly.
          </p>
        </div>
      </section>

      {/* Main Wizard */}
      <section className="mx-auto max-w-3xl px-6 py-16" id="booking-wizard">
        <Steps step={step} />

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl">Choose a service</h2>
            <div className="mt-6 grid gap-3">
              {allServices.map((s) => (
                <label
                  key={s.name}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-sm border p-5 transition-all ${
                    service === s.name
                      ? "border-foreground bg-accent/40 shadow-sm"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="flex-1 pr-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                      {s.category}
                    </p>
                    <p className="mt-1 font-serif text-lg">{s.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.duration} · {s.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl">{ZAR(s.price)}</span>
                    <input
                      type="radio"
                      name="service"
                      checked={service === s.name}
                      onChange={() => setService(s.name)}
                      className="sr-only"
                    />
                    <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center ${
                      service === s.name ? "border-foreground bg-foreground" : "border-muted-foreground/30"
                    }`}>
                      {service === s.name && <div className="h-1.5 w-1.5 rounded-full bg-background" />}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Picker */}
        {step === 2 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl">Pick a date & time</h2>
            <div className="mt-6 grid gap-6">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Time Slot
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2 md:grid-cols-4">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`rounded-sm border px-3 py-3 text-sm transition-all ${
                        time === t
                          ? "border-foreground bg-foreground text-background font-medium"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact details & Summary */}
        {step === 3 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl">Your details</h2>
            <div className="mt-6 grid gap-4">
              <BField label="Full name" value={info.name} onChange={(v) => setInfo({ ...info, name: v })} required />
              <BField label="Email" type="email" value={info.email} onChange={(v) => setInfo({ ...info, email: v })} required />
              <BField label="Phone number" type="tel" value={info.phone} onChange={(v) => setInfo({ ...info, phone: v })} required />
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Notes (optional)
                </label>
                <textarea
                  rows={4}
                  value={info.notes}
                  onChange={(e) => setInfo({ ...info, notes: e.target.value })}
                  placeholder="Any special requests, allergies, or styling preferences..."
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-all"
                />
              </div>
            </div>
            
            <div className="mt-8 rounded-sm border border-border bg-muted/40 p-5 text-sm shadow-sm">
              <p className="hairline">Booking Summary</p>
              <div className="mt-3 grid gap-1.5">
                <Line label="Service" value={selected?.name ?? ""} />
                <Line label="When" value={date && time ? `${date} · ${time}` : "—"} />
                <Line label="Total" value={selected ? ZAR(selected.price) : "—"} />
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="mt-10 flex items-center justify-between border-t border-border/60 pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:hover:text-muted-foreground transition-colors duration-200"
          >
            ← Back
          </button>
          
          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              disabled={(step === 1 && !service) || (step === 2 && (!date || !time))}
              className="rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={!info.name || !info.email || !info.phone}
              className="rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all font-medium"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </section>
    </>
  );
}

function Steps({ step }: { step: number }) {
  const labels = ["Service", "Date & Time", "Details"];
  return (
    <ol className="flex items-center justify-between gap-3">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <li key={l} className="flex flex-1 items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs transition-colors duration-300 ${
                active || done
                  ? "border-foreground bg-foreground text-background font-medium"
                  : "border-border text-muted-foreground"
              }`}
            >
              {done ? <Check size={14} /> : n}
            </span>
            <span
              className={`text-[0.68rem] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l}
            </span>
            {i < labels.length - 1 && <span className="ml-2 hidden h-px flex-1 bg-border md:block" />}
          </li>
        );
      })}
    </ol>
  );
}

function BField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-all"
      />
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-0.5">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
    </div>
  );
}
