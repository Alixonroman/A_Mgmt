class ApartmentPhotosController < ApplicationController
  before_action :set_apartment_photo, only: %i[ show edit update destroy ]

  # GET /apartment_photos or /apartment_photos.json
  def index
    apartment_photos = ApartmentPhoto.all
    render json: apartment_photos
  end

  # GET /apartment_photos/1 or /apartment_photos/1.json
  def show
    apartment_photo = ApartmentPhoto.find(params[:id])
    render json: apartment_photo
  end

end
