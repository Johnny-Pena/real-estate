import { Link } from "react-router-dom";


export default function BioComp() {
  return (
    <>
    <div className="flex flex-col items-center px-4">
    <h1 className="text-center text-2xl font-bold mt-14 mb-6 md:text-5xl">Meet your real estate agent</h1>
    
    <div className="hero bg-base-100 mb-6">
    <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
      <img
        src="/images/johnny-real-estate-headshot2.jpg"
        sizes="(max-width: 640px) 100vw, 33vw"
        className="w-full rounded-lg shadow-2xl sm:w-1/3"
        alt="Johnny Peña with classical guitar"
        loading="lazy"
        width="512"
        height="auto"
      />
      <div className="lg:ml-8 w-full">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Johnny Peña, M.M.</h3>
          <div className="badge badge-primary text-md font-semibold">Licensed Real Estate Agent</div>
          <div className="badge badge-secondary text-md font-semibold">Local Market Experience</div>
          <div className="badge badge-info text-md font-semibold">Broker: Dash Texas Real Estate</div>
        </div>
        {/*<p className="text-lg font-semibold text-accent mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="bg-base-200 p-4 rounded-lg mb-4">
          <p className="text-sm italic">
            💬 "Rosalinda, parent: 'Mr. Pena is not only an amazing teacher but also a gifted musician.'"
          </p>
        </div>*/}
        <p className="py-6">
        Johnny Peña is a licensed real estate agent with Dash Realty in Austin, Texas (License ID #764641), helping buyers and sellers across the Austin area since 2021. He’s also an active music educator and performer with 15+ years of teaching experience — currently working with Austin ISD and Victoria College — and previously serving as a lecturer at the Baptist University of the Americas (2016–2018) and the University of Texas at San Antonio (2018–2022). He earned his Master of Music in Guitar Performance from UTSA in 2014.
        </p>
        <p>The same communication, patience, attention to detail, and creative problem-solving he brings to the classroom are the qualities he brings to every real estate transaction.
        </p>  
        <Link to="/apartments" className="btn btn-primary btn-lg mt-6">Start your apartment search</Link>
      </div>
    </div>
    </div>
        
    </div>    
    </>
  );
}