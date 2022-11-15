class ApartmentPhotosSerializer < ActiveModel::Serializer
  attributes :id, :apartment_id, :photo_url
  belongs_to :apartment
end
