import { Instagram, Facebook, Music2, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl tracking-tight">Polish Me Pretty Nail Bar</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A considered nail studio in Fountain Valley. Premium products,
            licensed technicians, and a calmer kind of beauty appointment.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Music2, Star].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Salon</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Visit</div>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
            <li>9035 Garfield Ave</li>
            <li>Fountain Valley, CA 92708</li>
            <li>
              <a href="tel:+17145943032" className="hover:text-primary transition-colors">
                (714) 594-3032
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Polish Me Pretty Nail Bar. All rights reserved.</p>
          <p>Crafted with care in Fountain Valley, CA.</p>
        </div>
      </div>
    </footer>
  );
}
