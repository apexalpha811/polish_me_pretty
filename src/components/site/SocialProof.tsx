import { useReveal } from "@/hooks/use-reveal";

const logos = ["Orange Coast", "Allure Local", "LA Weekly", "Voyage LA", "OC Register"];

export function SocialProof() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-14 border-y border-border/60 bg-card/40">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Loved by locals & featured in
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((l) => (
            <span
              key={l}
              className="font-serif text-xl md:text-2xl text-foreground/55 hover:text-foreground/85 transition-colors tracking-wide"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
