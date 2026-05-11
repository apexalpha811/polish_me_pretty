import { Sparkles, Flower2, Brush, Gem, Droplets, Leaf } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Sparkles, title: "Signature Manicure", desc: "Shaped, buffed, and finished with a long-wear polish you'll keep glancing at." },
  { icon: Flower2, title: "Luxury Pedicure", desc: "A 60-minute ritual with warm soaks, exfoliation, and a slow, restorative massage." },
  { icon: Gem, title: "Gel & Builder Gel", desc: "High-shine, chip-resistant wear that lasts up to three weeks without lifting." },
  { icon: Brush, title: "Custom Nail Art", desc: "Hand-painted detail, French variations, and chrome — designed with you in the chair." },
  { icon: Droplets, title: "Dip Powder", desc: "A featherlight, odor-free finish with serious staying power for everyday hands." },
  { icon: Leaf, title: "Waxing & Add-ons", desc: "Brow shaping, paraffin treatments, and callus care to round out your visit." },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">The Services</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight">
            Quietly indulgent. Quietly precise.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Every service is performed by licensed technicians using premium products,
            single-use files, and hospital-grade sanitization.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border/70 bg-card p-7 hover-scale hover:shadow-[var(--shadow-soft)] hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/60 text-foreground group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
