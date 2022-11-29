import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ApartmentCard from "../components/ApartmentCard";
function ApartmentView() {
    const [apartments, setApartments] = useState([]);
    useEffect (() => { 
        fetch("http://localhost:3000/apartments")
        .then((res) => res.json())
        .then((apartments) => setApartments(apartments));
    
    
    }, [])
const allApartments = apartments.map((apartment) => {
    return <ApartmentCard key={apartment.id} apartment={apartment} />;
    });

  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="hero min-h-screen bg-base-200 bg-secondary-content">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-7xl font-bold">Browse Apartments</h1>
            <p className="py-6">If you want... i cant make you do anything</p>
          </div>
        </div>
      </div>
      <div class="divider" ></div>
      <main id="apartments" class="flex-none justify-center ... grid grid-cols-3 gap-5 px-px ...">

      {allApartments}
      </main>
      
    </>
  );
}
export default ApartmentView;

// {/* Apartments */}
//       <div class="mx-8 ...  max-w-lg ...  shadow-xl ...  hover:shadow-indigo-500/40 grow-0 shrink-0">
//         <Card side="lg">
//           <Card.Image src={image} alt="Apt Photos" />
//           <Card.Body>
//             <Card.Title tag="h2"> Apt</Card.Title>
//             <p>
//               {address} - {beds} Beds - {baths} Bath - {sqf} Sqf
//             </p>
//             <Card.Actions className="justify-end">
//               <Button color="primary">Apply Now</Button>
//             </Card.Actions>
//           </Card.Body>
//         </Card>
//       </div>