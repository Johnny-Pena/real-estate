export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
      
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseOne" className="peer" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          How is this service free for renters?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg">
            It's 100% free — apartment communities pay the locating fee, so you don't owe anything for our matching and tour coordination services. There are no hidden costs or obligations.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseTwo" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          What information do you need from me?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg mb-3">Just the basics to match you with the right apartments:</p>
          <ul className="list-disc list-inside text-lg">
            <li>Name, email, and phone number</li>
            <li>Budget range and bedroom/bathroom preferences</li>
            <li>Preferred neighborhoods or areas</li>
            <li>Move-in date timeline</li>
            <li>Any must-haves (pets, parking, amenities)</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseThree" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          How fast will I get my apartment list?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg">
            Most requests return a curated list within 24–48 hours. Common requests often get same-day responses. I prioritize quality matches over speed, ensuring each option fits your specific needs.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseFour" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Can you book tours for me?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg">
            Yes! Once you pick your favorite options from the list, I'll schedule tours at times that work for you and confirm all the details. I coordinate everything to make the process as smooth as possible.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseFive" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Do you work with pets or special requirements?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg">
            Absolutely! Tell me your pet details (type, breed, size) or any accessibility needs, and I'll filter results to only show apartments that accommodate your requirements. Pet-friendly options are a specialty.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseSeven" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Is a credit check required to get the list?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p className="text-lg">
            No credit check is needed to receive your personalized apartment list. Background and credit checks only happen later when you decide to apply for a specific apartment. Getting the list is completely risk-free.
          </p>
        </div>
      </div>
    </div>
  );
}
