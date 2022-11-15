class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :beds
      t.string :baths
      t.string :sqf
      t.string :image

      t.timestamps
    end
  end
end
