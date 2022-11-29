import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, []);

  function handleDelete(id) {
    console.log(id);
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
    })
      // If response is 200 refresh the page
      .then((res) => {
        if (res.ok) {
          window.location.reload();
        }
      });
  }

  return (
    <>
      {reviews.map((review) => {
        return <ReviewCard handleDelete={handleDelete} review={review} />;
      })}
    </>
  );
}

export default ReviewList;
