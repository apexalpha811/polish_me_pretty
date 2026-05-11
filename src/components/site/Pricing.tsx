import { Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const tiers = [
  {
    name: "Essential",
    price: "35",
    tagline: "A clean, classic finish.",
    features: [
      "Shape, buff, and cuticle care",
      "Hand or foot massage",
      "Long-wear polish of choice",
      "Approx. 45 minutes",
    ],
    highlight: false,
  },
  {
    name: "Signature",
    price: "65",
    tagline: "Our most-loved ritual.",
    features: [
      "Everything in Essential",
      "Gel polish, up to 3-week wear",
      "Exfoliation & paraffin treatment",
      "Extended 60-minute massage",
    ],
    highlight: true,
  },
  {
    name: "The Polished Ritual",
    price: "110",
    tagline: "Manicure + pedicure, unhurried.",
    features: [
      "Full Signature manicure",
      "Luxury pedicure with hot stones",
      "Custom nail art accent",
      "Champagne or matcha on the house",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-card/40 border-y border-border/60">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Investment</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight">
            Honest pricing. No surprises.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Starting prices for our most-requested services. Add-ons and nail art priced in studio.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col hover-scale ${
                t.highlight
                  ? "bg-foreground text-background shadow-[var(--shadow-elegant)]"
                  : "bg-background border border-border"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground px-4 py-1.5 rounded-full">
                  Most loved
                </span>
              )}
              <h3 className={`font-serif text-3xl ${t.highlight ? "text-background" : ""}`}>
                {t.name}
              </h3>
              <p className={`mt-1 text-sm ${t.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {t.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl">${t.price}</span>
                <span className={`text-sm ${t.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                  / starting
                </span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check
                      size={18}
                      className={t.highlight ? "text-primary shrink-0 mt-0.5" : "text-primary shrink-0 mt-0.5"}
                    />
                    <span className={t.highlight ? "text-background/85" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+17145943032"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  t.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                Book an appointment
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
