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
          <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Johnny Peña</h3>
          <div className="badge badge-primary text-md font-semibold">Master of Music Degree</div>
          <div className="badge badge-secondary text-md font-semibold">15+ Years</div>
          <div className="badge badge-info text-md font-semibold">Competition Winner</div>
        </div>
        <p className="text-lg font-semibold text-accent mb-3">
          Classical Guitar, Electric Guitar, and Ukulele • Ages 8-Adult
        </p>
        <div className="bg-base-200 p-4 rounded-lg mb-4">
          <p className="text-sm italic">
            💬 "Rosalinda, parent: 'Mr. Pena is not only an amazing teacher but also a gifted musician.'"
          </p>
        </div>
        <p className="py-6">
        Johnny Peña is a licensed real estate agent with Dash Realty in Austin, Texas (License ID #764641), helping buyers and sellers across the Austin area since 2021. Before getting into real estate, Johnny has spent 15+ years as a music educator and performer, teaching guitar and holding faculty positions at Baptist University of the Americas and the University of Texas at San Antonio. He also earned his Master of Music in Guitar Performance from UTSA in 2014.
        </p>
        <p>The skills he has developed through teaching and performing — clear communication, patience, attention to detail, and creative problem-solving — now shape the way he supports his clients through every step of a real estate transaction. Outside of real estate, Johnny continues to compose and record original music under the name Key Mosaic.
        </p>  
        <Link to="/apartments" className="btn btn-primary btn-lg mt-6">Start your apartment search</Link>
      </div>
    </div>
    </div>
        
    </div>    
    </>
  );
}