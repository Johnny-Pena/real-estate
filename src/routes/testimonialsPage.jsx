import TestimonialsFull from "../components/TestimonialsFull"


export const meta = () => {
  return [
    { title: "Client Testimonials - Johnny Peña Real Estate" },
    { name: "description", content: "Read reviews from Austin renters who found their perfect apartment with Johnny Peña. Licensed real estate agent providing personalized, free apartment locating services." },
    { name: "keywords", content: "Johnny Peña reviews, Austin apartment locating reviews, real estate testimonials, Dash Realty reviews" },
    { property: "og:title", content: "Client Testimonials - Johnny Peña Real Estate" },
    { property: "og:description", content: "See what Austin renters say about working with licensed real estate agent Johnny Peña for their apartment search." },
    { property: "og:url", content: "https://johnnypenahomes.com/testimonials" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://johnnypenahomes.com/testimonials" }
  ];
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
      <h1 className="text-5xl font-bold mt-16 mb-8">Testimonials</h1>
      <TestimonialsFull />
    </div>
  );
}