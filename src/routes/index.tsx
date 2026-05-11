import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Visit } from "@/components/site/Visit";
import { ContactForm } from "@/components/site/ContactForm";
import { BottomCTA } from "@/components/site/BottomCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Polish Me Pretty Nail Bar — Luxury Nails in Fountain Valley, CA" },
      {
        name: "description",
        content:
          "Considered, luxurious nail care in Fountain Valley. Manicures, pedicures, gel and custom nail art by licensed technicians. Book today.",
      },
      { property: "og:title", content: "Polish Me Pretty Nail Bar — Luxury Nails in Fountain Valley" },
      {
        property: "og:description",
        content: "A quiet, considered nail bar in Fountain Valley, CA. Book your appointment today.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Polish Me Pretty Nail Bar",
  image: "",
  telephone: "+1-714-594-3032",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9035 Garfield Ave",
    addressLocality: "Fountain Valley",
    addressRegion: "CA",
    postalCode: "92708",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Pricing />
        <Visit />
        <ContactForm />
        <BottomCTA />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
