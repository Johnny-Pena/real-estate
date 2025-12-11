
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const initialData = {
  fullName: "",
  email: "",
  phone: "",
  budget: "",
  budgetSlider: 1000, // slider value in dollars
  bedrooms: "1",
  bathrooms: "1",
  neighborhoods: [],
  moveInDate: "",
  moveInDateEnd: "",
  pets: false,
  petType: "",
  tourTimes: [],
  message: "",
  consent: true,
  hasCreditIssues: false,
  creditIssuesSummary: "",
  hasCriminalRecord: false,
  criminalRecordSummary: "",
  immigrationStatus: "",
};

export default function AptDynamicForm() {
  const [state, handleSubmit] = useForm("xzznakrn");
  const [step, setStep] = useState(1);
  const [data, setData] = useState(() => {
    // attempt restore from localStorage for nicer UX
    try {
      const raw = localStorage.getItem("aptFormData");
      return raw ? JSON.parse(raw) : initialData;
    } catch {
      return initialData;
    }
  });
  const [errors, setErrors] = useState({});

  // persist small autosave
  const save = (next) => {
    setData(next);
    try {
      localStorage.setItem("aptFormData", JSON.stringify(next));
    } catch {}
  };

  const update = (field, value) => {
    const next = { ...data, [field]: value };
    save(next);
  };

  // Calculate budget range based on slider value
  const getBudgetRange = (sliderValue) => {
    const basePrice = parseInt(sliderValue);
    let minPrice, maxPrice;
    
    if (basePrice < 1300) {
      // $400 gap under $1300
      minPrice = basePrice;
      maxPrice = basePrice + 400;
    } else if (basePrice < 1600) {
      // $500 gap between $1300 and $1600
      minPrice = basePrice;
      maxPrice = basePrice + 500;
    } else {
      // $1000 gap over $1600
      minPrice = basePrice;
      maxPrice = basePrice + 1000;
    }
    
    return { minPrice, maxPrice, display: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}` };
  };

  // Calculate required income (3x rent)
  const getRequiredIncome = (sliderValue) => {
    const { minPrice, maxPrice } = getBudgetRange(sliderValue);
    const minIncome = minPrice * 3;
    const maxIncome = maxPrice * 3;
    return { minIncome, maxIncome, display: `$${minIncome.toLocaleString()} - $${maxIncome.toLocaleString()}` };
  };

  // Update budget string whenever slider changes
  const handleBudgetSliderChange = (value) => {
    const { display } = getBudgetRange(value);
    const next = { ...data, budgetSlider: parseInt(value), budget: display };
    save(next);
  };

  const toggleArrayField = (field, value) => {
    const arr = new Set(data[field] || []);
    if (arr.has(value)) arr.delete(value);
    else arr.add(value);
    update(field, Array.from(arr));
  };

  const validateStep = (s) => {
    const e = {};
    if (s === 1) {
      if (!data.fullName.trim()) e.fullName = "Full name is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required.";
      if (!data.phone.trim()) e.phone = "Phone number is required.";
    }
    if (s === 2) {
      if (!data.budget) e.budget = "Please select a budget range.";
    }
    if (s === 3) {
      if (!data.bedrooms) e.bedrooms = "Please select bedrooms.";
    }
    if (s === 4) {
      if (!data.moveInDate) e.moveInDate = "Please pick a move-in date.";
    }
    if (s === 5) {
      if (!data.immigrationStatus) e.immigrationStatus = "Please select your status.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(6, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));
  const goTo = (s) => {
    setStep(s);
  };

  // Final submit: we render a <form> with hidden inputs and let Formspree handle the POST
  const handleFinalSubmit = (e) => {
    // keep default behaviour: Formspree handleSubmit expects the event
    // we also run light final validation
    if (!validateStep(1) || !validateStep(2) || !validateStep(3) || !validateStep(4) || !validateStep(5)) {
      // jump to first invalid step
      if (Object.keys(errors).some((k) => ["fullName", "email", "phone"].includes(k))) {
        setStep(1);
      } else if (Object.keys(errors).some((k) => ["budget"].includes(k))) {
        setStep(2);
      } else if (Object.keys(errors).some((k) => ["bedrooms"].includes(k))) {
        setStep(3);
      } else if (Object.keys(errors).some((k) => ["moveInDate"].includes(k))) {
        setStep(4);
      } else {
        setStep(5);
      }
      e.preventDefault();
      return;
    }
    // allow Formspree to process the event
    handleSubmit(e);
  };

  if (state.succeeded) {
    // clear local saved data on success
    try {
      localStorage.removeItem("aptFormData");
    } catch {}
    return (
      <div className="w-full flex justify-center py-8 bg-base-200">
        <div className="card bg-base-100 w-full max-w-2xl p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Thanks — request received!</h3>
          <p className="mb-4">
            We'll reach out within 24 hours to schedule tours and deliver your tailored apartment list. If you need something sooner, email{" "}
            <a href="mailto:info@arcomelody.com" className="link link-nuetral">
              info@arcomelody.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center py-6 bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-lg p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">Find Your Perfect Apartment</h2>
        <p className="text-sm opacity-70 mb-8 text-center">We'll create a personalized list just for you</p>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium opacity-70">Step {step} of 6</span>
            <span className="text-xs font-medium opacity-70">{Math.round((step / 6) * 100)}%</span>
          </div>
          <div className="w-full bg-base-300 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Contact */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Let's start with your contact info</h3>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                name="fullName"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={`input input-bordered w-full ${errors.fullName ? "input-error" : ""}`}
                placeholder="Jane Doe"
                required
              />
              {errors.fullName && <span className="text-error text-xs mt-1">{errors.fullName}</span>}
              <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                placeholder="you@example.com"
                required
              />
              {errors.email && <span className="text-error text-xs mt-1">{errors.email}</span>}
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={`input input-bordered w-full ${errors.phone ? "input-error" : ""}`}
                placeholder="(555) 555-5555"
                required
              />
              {errors.phone && <span className="text-error text-xs mt-1">{errors.phone}</span>}
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={next} className="btn btn-accent btn-block">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">What's your budget?</h3>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Desired Monthly Rent</span>
              </label>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-nuetral">{data.budget || getBudgetRange(data.budgetSlider).display}</p>
                  <p className="text-xs opacity-60 mt-1">Slide to adjust your budget range</p>
                </div>
                <input 
                  type="range" 
                  min={900} 
                  max={3000} 
                  step={50}
                  value={data.budgetSlider}
                  onChange={(e) => handleBudgetSliderChange(e.target.value)}
                  className="range range-neutral w-full" 
                />
                <div className="flex justify-between text-xs opacity-60 px-1">
                  <span>$900</span>
                  <span>$3,000</span>
                </div>
                
                {/* Income requirement info */}
                <div className="bg-info/10 border border-info/20 rounded-lg p-3 mt-4">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-info-content">Required Monthly Income</p>
                      <p className="text-lg font-bold text-info-content mt-1">{getRequiredIncome(data.budgetSlider).display}</p>
                      <p className="text-xs opacity-70 mt-1">Most apartments require tenants to earn 3x the monthly rent</p>
                    </div>
                  </div>
                </div>
              </div>
              {errors.budget && <span className="text-error text-xs mt-1">{errors.budget}</span>}
            </div>

            <div className="flex justify-between gap-3 mt-6">
              <button onClick={back} className="btn btn-ghost">
                Back
              </button>
              <button onClick={next} className="btn btn-accent flex-1">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Bedrooms, Bathrooms & Area */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Tell us about your ideal apartment</h3>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">How many bedrooms?</span>
              </label>
              <div className="grid grid-cols-4 gap-3">
                {["Studio", "1", "2", "3+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("bedrooms", b)}
                    className={`btn ${data.bedrooms === b ? "btn-secondary" : "btn-outline"}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.bedrooms && <span className="text-error text-xs mt-1">{errors.bedrooms}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">How many bathrooms?</span>
              </label>
              <div className="grid grid-cols-4 gap-3">
                {["1", "1.5", "2", "2+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("bathrooms", b)}
                    className={`btn ${data.bathrooms === b ? "btn-secondary" : "btn-outline"}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.bathrooms && <span className="text-error text-xs mt-1">{errors.bathrooms}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Preferred Area</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["Downtown", "North", "South", "East", "West"].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => toggleArrayField("neighborhoods", n)}
                    className={`btn btn-sm ${data.neighborhoods.includes(n) ? "btn-secondary" : "btn-outline"}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between gap-3 mt-6">
              <button onClick={back} className="btn btn-ghost">
                Back
              </button>
              <button onClick={next} className="btn btn-accent flex-1">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Move-in Date & Pets */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Timeline and pets</h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">When do you want to move in?</span>
              </label>
              <div className="space-y-3">
                <div>
                  <label className="label">
                    <span className="label-text text-sm">Earliest move-in date</span>
                  </label>
                  <input
                    name="moveInDate"
                    type="date"
                    value={data.moveInDate}
                    onChange={(e) => update("moveInDate", e.target.value)}
                    className={`input input-bordered w-full ${errors.moveInDate ? "input-error" : ""}`}
                    required
                  />
                  {errors.moveInDate && <span className="text-error text-xs mt-1">{errors.moveInDate}</span>}
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-sm">Latest move-in date</span>
                    <span className="label-text-alt text-xs opacity-60">Optional</span>
                  </label>
                  <input
                    name="moveInDateEnd"
                    type="date"
                    value={data.moveInDateEnd}
                    onChange={(e) => update("moveInDateEnd", e.target.value)}
                    className="input input-bordered w-full"
                    min={data.moveInDate}
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Do you have pets?</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, pets: false, petType: "" };
                    save(next);
                  }}
                  className={`btn ${!data.pets ? "btn-secondary" : "btn-outline"}`}
                >
                  No pets
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, pets: true };
                    save(next);
                  }}
                  className={`btn ${data.pets ? "btn-secondary" : "btn-outline"}`}
                >
                  Yes, I have pets
                </button>
              </div>
            </div>

            {data.pets && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">What type/breed?</span>
                </label>
                <input
                  name="petType"
                  type="text"
                  value={data.petType}
                  onChange={(e) => update("petType", e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="e.g., Dog (Golden Retriever), Cat, etc."
                />
              </div>
            )}

            <div className="flex justify-between gap-3 mt-6">
              <button onClick={back} className="btn btn-ghost">
                Back
              </button>
              <button onClick={next} className="btn btn-accent flex-1">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Background Information */}
        {step === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Background information</h3>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Do you have broken leases, evictions, foreclosure, car-repos or any outstanding debts owed to properties or utility companies?</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, hasCreditIssues: false, creditIssuesSummary: "" };
                    save(next);
                  }}
                  className={`btn ${!data.hasCreditIssues ? "btn-secondary" : "btn-outline"}`}
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, hasCreditIssues: true };
                    save(next);
                  }}
                  className={`btn ${data.hasCreditIssues ? "btn-secondary" : "btn-outline"}`}
                >
                  Yes
                </button>
              </div>
            </div>

            {data.hasCreditIssues && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Please add a short summary of what may appear during a credit check</span>
                </label>
                <textarea
                  name="creditIssuesSummary"
                  value={data.creditIssuesSummary}
                  onChange={(e) => update("creditIssuesSummary", e.target.value)}
                  className="textarea textarea-bordered w-full"
                  rows="3"
                  placeholder="Brief description..."
                />
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Do you have any misdemeanors, felonies, or arrests that could show up on a criminal background check?</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, hasCriminalRecord: false, criminalRecordSummary: "" };
                    save(next);
                  }}
                  className={`btn ${!data.hasCriminalRecord ? "btn-secondary" : "btn-outline"}`}
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = { ...data, hasCriminalRecord: true };
                    save(next);
                  }}
                  className={`btn ${data.hasCriminalRecord ? "btn-secondary" : "btn-outline"}`}
                >
                  Yes
                </button>
              </div>
            </div>

            {data.hasCriminalRecord && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Please provide a short summary of what may appear during a background check</span>
                </label>
                <textarea
                  name="criminalRecordSummary"
                  value={data.criminalRecordSummary}
                  onChange={(e) => update("criminalRecordSummary", e.target.value)}
                  className="textarea textarea-bordered w-full"
                  rows="3"
                  placeholder="Brief description..."
                />
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Are you a US Citizen, a resident, or do you have work authorization?</span>
              </label>
              <select
                name="immigrationStatus"
                value={data.immigrationStatus}
                onChange={(e) => update("immigrationStatus", e.target.value)}
                className={`select select-bordered w-full ${errors.immigrationStatus ? "select-error" : ""}`}
                required
              >
                <option value="">Select your status</option>
                <option value="US Citizen">US Citizen</option>
                <option value="Permanent Resident">Permanent Resident</option>
                <option value="Work Authorization">Work Authorization</option>
              </select>
              {errors.immigrationStatus && <span className="text-error text-xs mt-1">{errors.immigrationStatus}</span>}
            </div>

            <div className="flex justify-between gap-3 mt-6">
              <button onClick={back} className="btn btn-ghost">
                Back
              </button>
              <button onClick={next} className="btn btn-accent flex-1">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Review & Submit */}
        {step === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Review and submit</h3>
            
            <div className="space-y-3">
              <div className="bg-base-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-sm">Contact Info</h4>
                  <button onClick={() => goTo(1)} className="text-nuetral text-xs font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70">Name:</span> {data.fullName}</p>
                  <p><span className="opacity-70">Email:</span> {data.email}</p>
                  <p><span className="opacity-70">Phone:</span> {data.phone}</p>
                </div>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-sm">Budget</h4>
                  <button onClick={() => goTo(2)} className="text-nuetral text-xs font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70">Monthly Rent:</span> {data.budget || "—"}</p>
                </div>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-sm">Apartment Details</h4>
                  <button onClick={() => goTo(3)} className="text-nuetral text-xs font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70">Bedrooms:</span> {data.bedrooms}</p>
                  <p><span className="opacity-70">Bathrooms:</span> {data.bathrooms}</p>
                  <p><span className="opacity-70">Neighborhoods:</span> {data.neighborhoods.length ? data.neighborhoods.join(", ") : "No preference"}</p>
                </div>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-sm">Timeline & Pets</h4>
                  <button onClick={() => goTo(4)} className="text-nuetral text-xs font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70">Move-in:</span> {data.moveInDate || "—"}{data.moveInDateEnd ? ` to ${data.moveInDateEnd}` : ""}</p>
                  <p><span className="opacity-70">Pets:</span> {data.pets ? (data.petType ? `Yes - ${data.petType}` : "Yes") : "No"}</p>
                </div>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-sm">Background Information</h4>
                  <button onClick={() => goTo(5)} className="text-nuetral text-xs font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70">Credit Issues:</span> {data.hasCreditIssues ? "Yes" : "No"}</p>
                  {data.hasCreditIssues && data.creditIssuesSummary && (
                    <p className="text-xs italic">• {data.creditIssuesSummary}</p>
                  )}
                  <p><span className="opacity-70">Criminal Record:</span> {data.hasCriminalRecord ? "Yes" : "No"}</p>
                  {data.hasCriminalRecord && data.criminalRecordSummary && (
                    <p className="text-xs italic">• {data.criminalRecordSummary}</p>
                  )}
                  <p><span className="opacity-70">Status:</span> {data.immigrationStatus || "—"}</p>
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Additional notes</span>
                <span className="label-text-alt opacity-60">Optional</span>
              </label>
              <textarea
                name="messageInput"
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                className="textarea textarea-bordered w-full"
                rows="3"
                placeholder="Any special requirements or preferences..."
              />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                  checked={data.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                />
                <span className="label-text text-xs">
                  I agree to be contacted about apartment services. See{" "}
                  <a href="/privacy-policy" className="link link-nuetral" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Final form with hidden inputs to let Formspree capture all fields */}
            <form onSubmit={handleFinalSubmit}>
              {/* hidden inputs map */}
              <input type="hidden" name="fullName" value={data.fullName} />
              <input type="hidden" name="email" value={data.email} />
              <input type="hidden" name="phone" value={data.phone} />
              <input type="hidden" name="budget" value={data.budget} />
              <input type="hidden" name="bedrooms" value={data.bedrooms} />
              <input type="hidden" name="bathrooms" value={data.bathrooms} />
              <input type="hidden" name="neighborhoods" value={data.neighborhoods.join(", ")} />
              <input type="hidden" name="moveInDate" value={data.moveInDate} />
              <input type="hidden" name="moveInDateEnd" value={data.moveInDateEnd} />
              <input type="hidden" name="pets" value={data.pets ? "Yes" : "No"} />
              <input type="hidden" name="petType" value={data.petType} />
              <input type="hidden" name="tourTimes" value={data.tourTimes.join(", ")} />
              <input type="hidden" name="hasCreditIssues" value={data.hasCreditIssues ? "Yes" : "No"} />
              <input type="hidden" name="creditIssuesSummary" value={data.creditIssuesSummary} />
              <input type="hidden" name="hasCriminalRecord" value={data.hasCriminalRecord ? "Yes" : "No"} />
              <input type="hidden" name="criminalRecordSummary" value={data.criminalRecordSummary} />
              <input type="hidden" name="immigrationStatus" value={data.immigrationStatus} />
              <input type="hidden" name="message" value={data.message} />
              <input type="hidden" name="consent" value={data.consent ? "Yes" : "No"} />

              <div className="flex justify-between gap-3 mt-6">
                <button type="button" onClick={back} className="btn btn-ghost">
                  Back
                </button>
                <button type="submit" className="btn btn-accent flex-1" disabled={state.submitting}>
                  {state.submitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>

              {/* expose any errors returned by Formspree */}
              <ValidationError prefix="Form" field="form" errors={state.errors} />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}