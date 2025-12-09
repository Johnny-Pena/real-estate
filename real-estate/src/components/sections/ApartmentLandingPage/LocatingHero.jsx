export default function LocatingHero() {
  return (
    <div className="w-full bg-base-100 pt-8 lg:pt-6 pb-6">
      <div className="w-full max-w-none px-4">
        
        {/* Content Section - Full Width */}
        <div className="w-full text-left lg:text-left">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-4xl">
            FREE Apartment Locating
          </h1>
          
          {/* Credential Badges - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex flex-wrap justify-start gap-2 mb-6">
            <div className="badge badge-info text-sm font-semibold">Licensed Real Estate Agent</div>
            <div className="badge badge-secondary text-sm font-semibold">Local Market Experience</div>
            <div className="badge badge-success text-sm font-semibold">Broker: Dash Texas Real Estate</div>
          </div>
          

          {/* Description */}
          <p className="text-base mb-3 lg:text-xl lg:mb-6">
            I’m Johnny Peña with Dash Real Estate. I provide FREE apartment locating services, the individual apartment complexes cover my fee. I send the names of apartments, addresses,  websites, and photos. Plus I'll setup tours for you to see the apartments in person.
          </p>
          
          {/* Key Benefits */}
          <p className="text-sm mb-3 lg:text-base lg:mb-6">
             ✓ <strong>Free for renters — communities cover the fee</strong> <br />
            ✓ <strong>Curated matches — only apartments that fit you</strong> <br />
            ✓ <strong>Pet-friendly options available</strong> <br />
          </p>

                  {/* Instructor Photo */}
  <div className="w-full mb-4 flex justify-center">
            <img
              src="/images/johnny-pena-headshot-1024.webp"
              className="w-48 max-w-xs lg:w-56 lg:max-w-sm rounded-lg shadow-2xl"
              alt="Johnny Peña - Professional Guitar Teacher with guitar in Austin, Texas"
              loading="eager"
              fetchPriority="high"
            />
        </div>
        </div>
        
      </div>
    </div>
  );
}