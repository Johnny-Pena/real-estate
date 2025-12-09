export default function AptTrustBadges() {
  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why Choose Johnny Peña for Apartment Locating</h2>
          
          <p className="text-lg opacity-80">Licensed Real Estate Agent with Dash Texas Real Estate</p>
          <a href="https://www.trec.texas.gov/apps/license-holder-search/?detail_id=1000231795" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2">
            Verify License with TREC →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto justify-center">
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-primary">100%</div>
            <div className="stat-title text-base md:text-lg font-medium">Free Service</div>
            <div className="stat-desc text-base opacity-80 mt-1">Communities cover the fee</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-accent">Licensed</div>
            <div className="stat-title text-base md:text-lg font-medium">TX Real Estate Agent</div>
            <div className="stat-desc text-base opacity-80 mt-1">Dash Real Estate</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-primary">Fast</div>
            <div className="stat-title text-base md:text-lg font-medium">Response Time</div>
            <div className="stat-desc text-base opacity-80 mt-1">Same-day replies</div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">Tell me your preferences</h4>
              <p className="text-base opacity-80 leading-relaxed">Share your budget, bedroom needs, neighborhoods, and move-in timeline.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">Get your personalized list</h4>
              <p className="text-base opacity-80 leading-relaxed">Receive curated apartment options with photos, addresses, and contact info.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">Tour & move in</h4>
              <p className="text-base opacity-80 leading-relaxed">I'll schedule tours for you and support you through lease signing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
