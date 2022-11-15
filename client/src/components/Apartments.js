import React from "react";
import ApartmentCard from "./ApartmentCard";
function Apartments({ apartments }) {
  const allApartments = apartments.map((apartment) => {
    return <ApartmentCard key={apartment.id} apartment={apartment} />;
  });

  return (
    <>
      <main class="flex-none justify-center ... grid grid-cols-3 gap-5 px-px ...">
        {allApartments}
      </main>
    </>
  );
}
export default Apartments;
