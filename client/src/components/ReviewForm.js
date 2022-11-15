import { Card, Hero, Form, Input, Button } from "react-daisyui";

function ReviewForm() {
    
   


  return (
    <>
      <Hero class="bg-primary-content">
        <Hero.Content className="flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Leave a Review!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <Card className="flex-shrink-0 w-full max-w-sm shadow-lg shadow-indigo-500/40 ... bg-base-100">
            <Card.Body>
              <Form >
                <Form.Label title="Rating" />
                <Input
                    name="rating"
                  type="text"
                  placeholder="Rating"
                  className="input-bordered"
                />
              </Form>
              <Form>
                <Form.Label title="Review" />
                <Input
                    name="review"
                  type="text"
                  placeholder="Review"
                  className="input-bordered"
                />
              </Form>
              <Form className="mt-6">
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </>
  );
}
export default ReviewForm;
