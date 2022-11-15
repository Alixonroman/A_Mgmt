class ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show edit update destroy ]

  # GET /reviews or /reviews.json
  def index
    reviews = Review.all
    render json: reviews
  end

  



  

  # POST /reviews or /reviews.json
  def create
    review = Review.create(review_params)
    if review.valid?
    render json: review
    else
      render json: review.errors, status: :unprocessable_entity
    end

    
  end

  # PATCH/PUT /reviews/1 or /reviews/1.json
  def update
   
  end

  # DELETE /reviews/1 or /reviews/1.json
  def destroy
    
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
