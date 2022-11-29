class ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show edit update destroy ]

  # GET /reviews or /reviews.json
  def index
    reviews = Review.all
    render json: reviews
  end

  
def show 
  review = Review.find(params[:id])
  render json: review
end


  

  # POST /reviews or /reviews.json
  def create
    review = Review.create!(rating: params[:rating], review: params[:review])
    render json: review
  end

  
  # PATCH/PUT /reviews/1 or /reviews/1.json
  def update
   review = Review.find(params[:id])
   
    review.update( 
      review: params[:review] || review.review, 
      rating: params[:rating] || review.rating
    )

    if review.save
      render json: review
    else
      render json: review.errors, status: :unprocessable_entity
    end
    
  end









  
  # DELETE /reviews/1 or /reviews/1.json
  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: "Review deleted"
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:rating, :review)
    end
end
