import SignUpScript from '../components/forms/SignUpScript';

export const meta = () => {
  return [
    { title: "Start Your Apartment Search - Johnny Peña Real Estate" },
    { name: "description", content: "Begin your free apartment search with licensed Austin real estate agent Johnny Peña. Get personalized apartment recommendations and tour coordination at no cost." },
    { name: "keywords", content: "apartment search signup, free apartment locating, Johnny Peña contact, Austin apartment finder" },
    { property: "og:title", content: "Start Your Apartment Search - Johnny Peña" },
    { property: "og:description", content: "Connect with licensed real estate agent Johnny Peña to find your perfect Austin apartment. Free personalized service." },
    { property: "og:image", content: "/images/johnny-headshot2-192x192(1).jpg" },
    { property: "og:url", content: "https://johnnypenahomes.com/signup" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://johnnypenahomes.com/signup" }
  ];
};

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
            <SignUpScript />
        </div>
    );
}