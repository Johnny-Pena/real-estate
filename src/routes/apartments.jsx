import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial load time
const AptTrustBadges = lazy(() => import("../components/sections/ApartmentLandingPage/AptTrustBadges"));
const AptHeroWithForm = lazy(() => import("../components/sections/ApartmentLandingPage/AptHeroWithForm"));
const AptTestimonialSnippets = lazy(() => import("../components/sections/ApartmentLandingPage/AptTestimonialSnippets"));

const AptPhoneCTA = lazy(() => import("../components/sections/ApartmentLandingPage/AptPhoneCTA"));
const FAQ = lazy(() => import("../components/FAQ"));

export const meta = () => {
  return [
    { title: "Apartment Locating Service in Austin, TX | Johnny Peña Real Estate" },
    { name: "description", content: "Find your perfect Austin apartment with licensed real estate agent Johnny Peña. 100% FREE service - personalized lists, pet-friendly options, and tour coordination. Start your search today!" },
    { name: "keywords", content: "Austin apartments, apartment locating service, free apartment finder, Austin rentals, Johnny Peña real estate, pet-friendly apartments Austin, apartment search Austin, Dash Realty" },
    { property: "og:title", content: "Free Apartment Locating Service in Austin, TX | Johnny Peña" },
    { property: "og:description", content: "Licensed real estate agent helping renters find their perfect Austin apartment at no cost. Personalized service, pet-friendly options, and tour coordination included." },
    { property: "og:image", content: "/images/johnny-headshot2-192x192(1).jpg" },
    { property: "og:url", content: "https://johnnypenahomes.com/apartments" },
    { rel: "canonical", href: "https://johnnypenahomes.com/apartments" }
  ];
};

  
export default function Apartments() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <AptHeroWithForm />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <AptTrustBadges />
            </Suspense>

            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <AptTestimonialSnippets />
            </Suspense>

            {/* Phone CTA for additional lead conversion after pricing */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <AptPhoneCTA />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-64 animate-pulse bg-base-300 rounded-lg"></div>}>
                <FAQ />
            </Suspense>
        </div>
        </>
    );
}
