import React from 'react';
                         
const AptTestimonialSnippets = () => {
  const trustReasons = [
    {
      id: 1,
      icon: "🏢",
      title: "Licensed Professional",
      description: "Texas Real Estate Agent with Dash Texas Real Estate"
    },
    {
      id: 2,
      icon: "🆓",
      title: "100% Free Service",
      description: "Apartment communities cover the locator fee"
    },
    {
      id: 3,
      icon: "📋",
      title: "Personalized Lists",
      description: "Curated matches for your exact budget & needs"
    },
    {
      id: 4,
      icon: "🐾",
      title: "Pet-Friendly Options",
      description: "We'll find apartments that welcome your pets"
    }
  ];

  return (
    <div className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Austin Renters Trust Johnny Peña</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {trustReasons.map((reason) => (
            <div key={reason.id} className="card bg-base-200 shadow-lg text-center">
              <div className="card-body">
                <div className="text-5xl mb-3">{reason.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{reason.title}</h4>
                <p className="text-sm opacity-80">{reason.description}</p>
              </div>
            </div>
          ))}
          
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-center mb-12">Ready to find your perfect apartment?</h2>

          <div className="max-w-2xl mx-auto">
            <button 
              onClick={() => {
                const formElement = document.getElementById('apartment-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }} 
              className="btn btn-primary btn-lg"
            >
              Get Started - Find Your Apartment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptTestimonialSnippets;
