import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

export function ContactForm() {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within one business day.");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/40 border-y border-border/60">
      <div ref={ref} className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Say Hello</span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight">
          Questions, special requests, or bridal parties.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Send us a note. We reply to every message personally.
        </p>

        <form onSubmit={onSubmit} className="mt-12 grid gap-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
              <input
                required
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
              <input
                required
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
