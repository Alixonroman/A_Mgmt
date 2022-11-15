# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Apartment.create(address: "123 Main St", beds: 2, baths: 1, sqf: 1000, image: "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg")

ApartmentPhoto.create(apartment_id: 1, image_url: "https://cdn.decoist.com/wp-content/uploads/2017/03/Gorgeous-copper-pendant-lighting-for-the-kitchen-island.jpg", description: "blah")
ApartmentPhoto.create(apartment_id: 1, image_url: "https://cdn.vox-cdn.com/thumbor/E0jNRUTI81RBBRMSA_ZU7vq7I4g=/0x0:2400x1602/1200x675/filters:focal(682x772:1066x1156)/cdn.vox-cdn.com/uploads/chorus_image/image/54241701/LINEA_NicholasJamesPhoto_8.0.jpeg", description: "blah")
ApartmentPhoto.create(apartment_id: 1, image_url: "https://cdn.decoist.com/wp-content/uploads/2017/03/Modern-apartment-units-inside-heritage-building-Down-Under.jpg", description: "blah")

ApartmentPhoto.create(apartment_id: 2, image_url: "https://cdn.decoist.com/wp-content/uploads/2017/03/Gorgeous-copper-pendant-lighting-for-the-kitchen-island.jpg", description: "blah")
ApartmentPhoto.create(apartment_id: 2, image_url: "https://cdn.vox-cdn.com/thumbor/E0jNRUTI81RBBRMSA_ZU7vq7I4g=/0x0:2400x1602/1200x675/filters:focal(682x772:1066x1156)/cdn.vox-cdn.com/uploads/chorus_image/image/54241701/LINEA_NicholasJamesPhoto_8.0.jpeg", description: "blah")
ApartmentPhoto.create(apartment_id: 2, image_url: "https://cdn.decoist.com/wp-content/uploads/2017/03/Modern-apartment-units-inside-heritage-building-Down-Under.jpg", description: "blah")

ApartmentPhoto.create(apartment_id: 3, image_url: "https://cdn.decoist.com/wp-content/uploads/2017/03/Gorgeous-copper-pendant-lighting-for-the-kitchen-island.jpg", description: "blah")



Review.create(rating: 5, review: "This place is great!")
Review.create(rating: 4, review: "This place is great!")
Review.create(rating: 3, review: "This place is great!")
Review.create(rating: 2, review: "This place is great!")