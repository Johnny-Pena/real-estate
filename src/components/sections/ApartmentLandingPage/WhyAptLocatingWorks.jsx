export default function WhyAptLocatingWorks() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 bg-base-100 rounded-lg shadow-lg my-8">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Why Use a Licensed Apartment Locator</h2>
        <p className="text-center text-lg opacity-80 mb-12">
          Save time and avoid the hassle of searching on your own
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Benefit 1 */}
          <div className="text-center">
            <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
            <p className="text-sm opacity-80">
              No fees, no charges. Apartment communities pay the locator fee.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center">
            <div className="bg-success text-success-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              ⏰
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p className="text-sm opacity-80">
              Skip hours of searching online. Get a curated list matched to your needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center">
            <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              🔑
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-sm opacity-80">
              Licensed agent support through tours, applications, and lease signing.
            </p>
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-12 bg-base-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-4">No Obligation, No Pressure</h3>
          <p className="text-center text-lg opacity-80 max-w-2xl mx-auto">
            Your information is kept private and secure. There's no obligation to use any apartments I recommend. My goal is simply to help you find the perfect home.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <div className="badge badge-lg badge-outline">Licensed & Bonded</div>
            <div className="badge badge-lg badge-outline">Privacy Protected</div>
            <div className="badge badge-lg badge-outline">No Hidden Fees</div>
          </div>
        </div>

      </div>
    </div>
  );
}
