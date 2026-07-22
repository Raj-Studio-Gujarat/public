export type Testimonial = {
  id: string;
  frameLabel: string;
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    frameLabel: "TES-01",
    quote:
      "Raj Studio handled our three-day wedding calmly and delivered photographs the whole family still prints and frames.",
    name: "Priya & Kunal",
    detail: "Wedding — Ahmedabad",
  },
  {
    id: "t-02",
    frameLabel: "TES-02",
    quote:
      "Studio portraits that actually look like us. No over-editing, no strange skin tones — just honest, well-lit work.",
    name: "Mehta Family",
    detail: "Studio Portrait",
  },
  {
    id: "t-03",
    frameLabel: "TES-03",
    quote:
      "Covered our corporate launch across two venues without missing a beat. Highlights film was ready in a week.",
    name: "Nirvaan Textiles",
    detail: "Corporate Event",
  },
];
