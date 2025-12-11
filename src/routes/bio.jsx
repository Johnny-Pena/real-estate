import BioComp from '../components/BioComp';

export const meta = () => {
  return [
    { title: "About Johnny Peña - Licensed Real Estate Agent in Austin, TX" },
    { name: "description", content: "Meet Johnny Peña, a licensed Austin real estate agent with Dash Realty. Former music educator bringing exceptional communication and personalized service to apartment locating since 2021." },
    { name: "keywords", content: "Johnny Peña bio, Johnny Pena Austin realtor, Dash Realty agent, Austin real estate agent, licensed Texas realtor" },
    { property: "og:title", content: "About Johnny Peña - Austin Real Estate Agent" },
    { property: "og:description", content: "Licensed real estate agent helping Austin renters find their perfect apartment. Bringing 15+ years of teaching experience to real estate." },
    { property: "og:image", content: "/images/johnny-real-estate-headshot2.jpg" },
    { property: "og:url", content: "https://johnnypenahomes.com/bio" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://johnnypenahomes.com/bio" }
  ];
};

export default function Bio() {
  return (
      <div className="flex flex-col items-center bg-base-200 min-h-screen pt-8 px-4 w-full">
        <BioComp />
      </div>
  );
}