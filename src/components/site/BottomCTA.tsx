import { useReveal } from "@/hooks/use-reveal";

export function BottomCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div ref={ref} className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary">A small luxury</span>
        <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-background">
          Treat yourself. You've earned it.
        </h2>
        <p className="mt-6 text-background/70 text-lg max-w-xl mx-auto">
          Reserve your chair in seconds. We'll have your favorite drink waiting.
        </p>
        <a
          href="tel:+17145943032"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity hover-scale"
        >
          Book an appointment
        </a>
      </div>
    </section>
  );
}
