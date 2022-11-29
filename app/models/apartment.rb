class Apartment < ApplicationRecord
    has_many :apartment_photos
    has_many :reviews 
    belongs_to :users
end
