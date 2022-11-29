import { Card, Button } from "react-daisyui";

function ApartmentCard({ apartment }) {
  const { address, beds, baths, sqf, image } = apartment;

// add to cart function
  
 



  return (
    <>
      <div class="mx-8 ...  max-w-lg ...  shadow-xl ...  hover:shadow-indigo-500/40 grow-0 shrink-0">
        <Card side="lg">
          <Card.Image src={image} alt="Apt Photos" />
          <Card.Body>
            <Card.Title tag="h2"> Apt</Card.Title>
            <p>
              {address} - {beds} Beds - {baths} Bath - {sqf} Sqf
            </p>
            <Card.Actions className="justify-end">
              <Button href="/apartments"color="primary">Browse</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default ApartmentCard;
