import { Card } from "react-daisyui";
import {useEffect, useState} from 'react'
function ReviewList() {

const [reviews, setReviews] = useState([]);


useEffect (() => { 
fetch('http://localhost:3000/reviews')
.then(res => res.json())
.then(reviews => {setReviews(reviews)})
}, [])
  


  return (
    <>
   
     {reviews.map((review) => {
        return (
             <div class="mx-h-32 w-50 p-4 text-center text-lg  list-outside ...  ...">
        <Card side="lg">
          <Card.Body>
            <Card.Title tag="h2" class="text-center text-2xl ...">
              Reviews
            </Card.Title>
            <li>Rating - sjnvskjdnc - Review - skhbcdjkbnjfdn</li>
            <Card.Actions className="justify-end">
              {/* <Button color="primary">Buy Now</Button> */}
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
        );
     })}
     
    </>
  );
}
export default ReviewList;
