import { createFileRoute } from "@tanstack/react-router";
import { HeroJourney } from "@/components/hero/HeroJourney";
import { Products } from "@/components/sections/Products";
import { Approach } from "@/components/sections/Approach";
import { WorldScene } from "@/components/sections/WorldScene";
import { Story } from "@/components/sections/Story";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/site/Nav";
import { Cursor } from "@/components/site/Cursor";
import { Loader } from "@/components/site/Loader";
import { brand } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Namo Organic — Grow With Nature | Regenerative Organic Inputs" },
      {
        name: "description",
        content:
          "Namo Organic makes residue-free biostimulants, living soil cultures and botanical crop protection for farmers who work with nature, not against it.",
      },
      { property: "og:title", content: "Namo Organic — Grow With Nature" },
      {
        property: "og:description",
        content:
          "Regenerative organic farm inputs: biostimulants, living soil cultures and botanical crop protection, proven in the field.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: brand.name,
          description: brand.description,
          email: brand.email,
          telephone: brand.phone,
          address: { "@type": "PostalAddress", addressLocality: brand.address },
          slogan: brand.tagline,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <HeroJourney />
        <Products />
        <Approach />
        <WorldScene />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
