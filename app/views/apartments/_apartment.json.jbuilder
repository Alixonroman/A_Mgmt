json.extract! apartment, :id, :address, :beds, :baths, :sqf, :image, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
