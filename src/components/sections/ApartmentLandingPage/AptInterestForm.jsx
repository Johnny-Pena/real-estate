
import { useForm, ValidationError } from '@formspree/react';

export default function AptInterestForm() {
  const [state, handleSubmit] = useForm("mblnpaoq");

  if (state.succeeded) {
    return <p className="alert alert-success text-center text-2xl text-white mt-4 font-bold">Thanks! We'll send your personalized apartment list within 24 hours and coordinate your tours. 🏡</p>;
  }

  return (
    <div className="w-full flex justify-center py-2 bg-base-200">
      <div className="card bg-base-100 w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Receive your FREE list of Apartments</h2>
        <p className="text-sm opacity-70 mb-6 text-center">
          I'll send you your FREE tailored list of apartments and book your tours!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Full Name*</span></label>
            <input type="text" name="fullName" className="input input-bordered w-full" required />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
          </div>

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Email*</span></label>
            <input type="email" name="email" className="input input-bordered w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

        <div className="form-control mb-4">
            <label className="label"><span className="label-text">Phone Number (optional)</span></label>
            <input type="tel" name="phone" className="input input-bordered w-full" />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>
          
          <p className="text-xs opacity-70 mb-4">
            By clicking <strong>Submit</strong>, you agree to be contacted by Johnny Peña about apartment locating services. Please read our
            <a href="/privacy-policy" className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            for more details.
          </p>

          <button type="submit" className="btn btn-accent w-full text-xl font-bold" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}