import { MapPin, Phone, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const hours = [
  ["Monday", "9 AM – 7 PM"],
  ["Tuesday", "9 AM – 7 PM"],
  ["Wednesday", "9 AM – 7 PM"],
  ["Thursday", "9 AM – 7 PM"],
  ["Friday", "9 AM – 7 PM"],
  ["Saturday", "9 AM – 6 PM"],
  ["Sunday", "Closed"],
];

export function Visit() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="visit" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Visit Us</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight">
            Tucked into Fountain Valley.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md">
            Walk-ins welcome when chairs allow — booking ahead is the surest way in,
            especially weekends.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Address</div>
                <a
                  href="https://maps.google.com/?q=9035+Garfield+Ave,+Fountain+Valley,+CA+92708"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-foreground hover:text-primary transition-colors"
                >
                  9035 Garfield Ave<br />Fountain Valley, CA 92708
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Phone</div>
                <a href="tel:+17145943032" className="mt-1 block text-foreground hover:text-primary transition-colors">
                  (714) 594-3032
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary mt-1 shrink-0" size={20} />
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Hours</div>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {hours.map(([d, h]) => (
                    <li key={d} className="flex justify-between max-w-xs border-b border-border/50 pb-1.5">
                      <span className="text-foreground/80">{d}</span>
                      <span className={h === "Closed" ? "text-muted-foreground" : "text-foreground"}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[640px] rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
          <iframe
            title="Polish Me Pretty Nail Bar location"
            src="https://www.google.com/maps?q=9035+Garfield+Ave,+Fountain+Valley,+CA+92708&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
