class CreateApartmentPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :apartment_photos do |t|
      t.string :image_url
      t.integer :apartment_id
      t.string :description

      t.timestamps
    end
  end
end
