import Hero from "../components/sections/Hero";

export const meta = () => {
  return [
    { title: "Johnny Peña - Austin Real Estate Agent | Free Apartment Locating" },
    { name: "description", content: "Licensed Austin real estate agent Johnny Peña helps renters find their perfect apartment at no cost. Personalized service, pet-friendly options, and expert local guidance." },
    { name: "keywords", content: "Johnny Peña, Johnny Pena, Austin real estate, apartment locating, Austin apartments, Dash Realty, free apartment finder, Austin rentals" },
    { property: "og:title", content: "Johnny Peña - Austin Real Estate Agent" },
    { property: "og:description", content: "Licensed Austin real estate agent specializing in free apartment locating services. Let me help you find your perfect Austin home." },
    { property: "og:image", content: "/images/johnny-headshot2-192x192(1).jpg" },
    { property: "og:url", content: "https://johnnypenahomes.com" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://johnnypenahomes.com" }
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}