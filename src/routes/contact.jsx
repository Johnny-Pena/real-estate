import ContactForm from "../components/forms/Contactus"; 

export const meta = () => {
    return [
        { title: "Contact Johnny Peña - Austin Real Estate Agent" },
        { name: "description", content: "Get in touch with Johnny Peña for free apartment locating services in Austin, TX. Licensed real estate agent ready to help you find your perfect home." },
        { name: "keywords", content: "contact Johnny Peña, Austin real estate agent, apartment locating Austin, Dash Realty contact" },
        { property: "og:title", content: "Contact Johnny Peña - Real Estate Agent" },
        { property: "og:description", content: "Reach out to licensed Austin real estate agent Johnny Peña for personalized apartment search assistance." },
        { property: "og:url", content: "https://johnnypenahomes.com/contact" }, 
        { property: "og:type", content: "website" },
        { rel: "canonical", href: "https://johnnypenahomes.com/contact" }
    ];
    };

export default function Contact() {
    return (
        <div className="bg-base-200 flex flex-col justify-center items-center pt-20 px-4 w-full md:min-h-screen">
        <img
        src="/images/Arco-Melody-Logo(Music-is-Joy-No.1)40x40px.png"
        alt="Arco Melody Logo"
        className="hidden w-40 h-40 object-contain mb-8"
        />
        <h1 className="text-center text-5xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
        </div>
    );
}