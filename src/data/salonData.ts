export type Service = {
  name: string;
  duration: string;
  price: number;
  description: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Artistry",
    blurb: "Precision cuts, dimensional colour and restorative care, tailored to you.",
    services: [
      { name: "Signature Cut & Style", duration: "60 min", price: 650, description: "Consultation, precision cut and bespoke blow-out." },
      { name: "Gloss & Tone", duration: "45 min", price: 850, description: "Shine-boosting glaze to refresh colour and condition." },
      { name: "Hand-Painted Highlights", duration: "180 min", price: 2450, description: "Sun-kissed balayage, brightened around the face." },
      { name: "Keratin Smoothing", duration: "120 min", price: 1950, description: "Frizz-free, sleek finish for up to twelve weeks." },
    ],
  },
  {
    id: "skin",
    title: "Skin & Facials",
    blurb: "Results-driven facials with botanical and clinical-grade formulas.",
    services: [
      { name: "Lior Signature Facial", duration: "75 min", price: 1150, description: "Cleanse, sculpting massage, custom mask and serum layering." },
      { name: "Brightening Vitamin C", duration: "60 min", price: 950, description: "Radiance-restoring ritual for dull, uneven skin." },
      { name: "Deep Hydration", duration: "60 min", price: 890, description: "Layered serums and hyaluronic masque for quenched skin." },
      { name: "Microdermabrasion", duration: "45 min", price: 780, description: "Gentle resurfacing for a smoother, refined complexion." },
    ],
  },
  {
    id: "nails",
    title: "Nail Atelier",
    blurb: "Considered, hygienic care for hands and feet — with long-wear finishes.",
    services: [
      { name: "Classic Manicure", duration: "45 min", price: 320, description: "Shape, cuticle care, hand massage and polish." },
      { name: "Gel Manicure", duration: "60 min", price: 450, description: "High-shine, chip-free wear for up to three weeks." },
      { name: "Spa Pedicure", duration: "60 min", price: 520, description: "Warm soak, exfoliation, massage and finish." },
      { name: "Builder Gel Overlay", duration: "75 min", price: 620, description: "Strength and structure for natural nails." },
    ],
  },
  {
    id: "brows",
    title: "Brows & Lashes",
    blurb: "Subtle definition and lift to frame the eye, beautifully.",
    services: [
      { name: "Brow Shape & Tint", duration: "30 min", price: 280, description: "Custom mapping with gentle plant-based tint." },
      { name: "Lash Lift & Tint", duration: "60 min", price: 580, description: "Soft curl and dark tint — no extensions needed." },
      { name: "Classic Lash Extensions", duration: "90 min", price: 950, description: "Featherlight, lengthening lash set." },
    ],
  },
];

export const team = [
  { name: "Lior Bekker", role: "Founder · Master Stylist", note: "15 years · trained in London" },
  { name: "Naledi Mokoena", role: "Senior Colourist", note: "Balayage & dimensional colour" },
  { name: "Sara van Wyk", role: "Skin Therapist", note: "CIDESCO certified" },
  { name: "Thandi Khumalo", role: "Nail Artist", note: "Builder gel specialist" },
];

export const ZAR = (n: number) => `R${n.toLocaleString("en-ZA")}`;
