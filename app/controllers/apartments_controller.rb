class ApartmentsController < ApplicationController
  

  # GET /apartments or /apartments.json
  def index
    apartments = Apartment.all
    render json: apartments
  end

  # GET /apartments/1 or /apartments/1.json
  def show
    apartment = Apartment.find(params[:id])
    render json: apartment , include: :apartment_photos
  end

  
end
