import { Modal, Input, Button, Textarea } from "react-daisyui";
import { useState } from "react";
function EditReview({ handleToogleEditEntry, handleEditEntry, review }) {
  const [newreview, setNewReview] = useState("");
  const [newrating, setNewRating] = useState("");

  function handleEditEntry(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        rating: newrating,
        review: newreview,
      }),
    })
      .then((res) => res.json())
      .then((updatedReview) => {
        handleToogleEditEntry();
        handleEditEntry(updatedReview);
      });
  }

  return (
    <Modal open={handleToogleEditEntry} onClickBackdrop={handleToogleEditEntry}>
      <Modal.Header className="font-bold">Edit Entry</Modal.Header>

      <Modal.Body className="items-center text-center">
        <div className="space-y-6">
          <Input
            className="w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
            type="number"
            placeholder="Rating"
            onChange={(e) => setNewRating(e.target.value)}
          ></Input>
          <Textarea
            className="w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
            type="text"
            placeholder="Review"
            onChange={(e) => setNewReview(e.target.value)}
          ></Textarea>

          <Button
            onClick={handleEditEntry}
            type="submit"
            className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
          >
            Edit Review
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default EditReview;
