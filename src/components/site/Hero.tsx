import heroImg from "@/assets/hero-nails.jpg";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" />
            Fountain Valley · Est. Locally Loved
          </span>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Where every detail is polished to perfection.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A quiet, considered nail bar in the heart of Fountain Valley — where
            meticulous craft meets a moment that's entirely yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+17145943032"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity hover-scale"
            >
              Book an appointment
            </a>
            <a
              href="tel:+17145943032"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              <Phone size={16} className="text-primary" />
              (714) 594-3032
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] animate-fade-in">
            <img
              src={heroImg}
              alt="Elegantly manicured hand with soft blush polish at Polish Me Pretty Nail Bar"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 via-transparent to-transparent" />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -left-6 bg-card border border-border/70 rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Open today
            </div>
            <div className="mt-1 font-serif text-xl">9 AM – 7 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
