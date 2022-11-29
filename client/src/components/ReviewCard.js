import { useState } from "react";
import { Card, Button } from "react-daisyui";
import EditReview from "./EditReview";

function ReviewCard({ review, handleDelete }) {
  const [toogleEditEntry, setToogleEditEntry] = useState(false);

  const handleToogleEditEntry = () => {
    console.log("toogleEditEntry");
    setToogleEditEntry(!toogleEditEntry);
  };

  return (
    <>
      <div class="mx-h-32 w-50 p-4 text-center text-lg  list-outside ...  ...">
        <Card side="lg">
          <Card.Body>
            <Card.Title tag="h2" class="text-center text-2xl ...">
              Reviews
            </Card.Title>
            <li>
              Rating- {review.rating} Review- {review.review}
            </li>
            <Card.Actions className="justify-end">
              <Button
                id={review.id}
                onClick={(e) => handleDelete(review.id)}
                color="primary"
              >
                Delete
              </Button>
              <Button onClick={handleToogleEditEntry} color="primary">
                Edit
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
      {toogleEditEntry ? (
        <EditReview handleToogleEditEntry={handleToogleEditEntry} review= {review} />
      ) : null}
    </>
  );
}
export default ReviewCard;
