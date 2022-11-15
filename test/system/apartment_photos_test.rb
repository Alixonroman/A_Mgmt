require "application_system_test_case"

class ApartmentPhotosTest < ApplicationSystemTestCase
  setup do
    @apartment_photo = apartment_photos(:one)
  end

  test "visiting the index" do
    visit apartment_photos_url
    assert_selector "h1", text: "Apartment photos"
  end

  test "should create apartment photo" do
    visit apartment_photos_url
    click_on "New apartment photo"

    fill_in "Apartment", with: @apartment_photo.apartment_id
    fill_in "Description", with: @apartment_photo.description
    fill_in "Image url", with: @apartment_photo.image_url
    click_on "Create Apartment photo"

    assert_text "Apartment photo was successfully created"
    click_on "Back"
  end

  test "should update Apartment photo" do
    visit apartment_photo_url(@apartment_photo)
    click_on "Edit this apartment photo", match: :first

    fill_in "Apartment", with: @apartment_photo.apartment_id
    fill_in "Description", with: @apartment_photo.description
    fill_in "Image url", with: @apartment_photo.image_url
    click_on "Update Apartment photo"

    assert_text "Apartment photo was successfully updated"
    click_on "Back"
  end

  test "should destroy Apartment photo" do
    visit apartment_photo_url(@apartment_photo)
    click_on "Destroy this apartment photo", match: :first

    assert_text "Apartment photo was successfully destroyed"
  end
end
