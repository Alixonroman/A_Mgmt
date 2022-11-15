json.extract! apartment_photo, :id, :image_url, :apartment_id, :description, :created_at, :updated_at
json.url apartment_photo_url(apartment_photo, format: :json)
