require "test_helper"

class ApartmentPhotosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @apartment_photo = apartment_photos(:one)
  end

  test "should get index" do
    get apartment_photos_url
    assert_response :success
  end

  test "should get new" do
    get new_apartment_photo_url
    assert_response :success
  end

  test "should create apartment_photo" do
    assert_difference("ApartmentPhoto.count") do
      post apartment_photos_url, params: { apartment_photo: { apartment_id: @apartment_photo.apartment_id, description: @apartment_photo.description, image_url: @apartment_photo.image_url } }
    end

    assert_redirected_to apartment_photo_url(ApartmentPhoto.last)
  end

  test "should show apartment_photo" do
    get apartment_photo_url(@apartment_photo)
    assert_response :success
  end

  test "should get edit" do
    get edit_apartment_photo_url(@apartment_photo)
    assert_response :success
  end

  test "should update apartment_photo" do
    patch apartment_photo_url(@apartment_photo), params: { apartment_photo: { apartment_id: @apartment_photo.apartment_id, description: @apartment_photo.description, image_url: @apartment_photo.image_url } }
    assert_redirected_to apartment_photo_url(@apartment_photo)
  end

  test "should destroy apartment_photo" do
    assert_difference("ApartmentPhoto.count", -1) do
      delete apartment_photo_url(@apartment_photo)
    end

    assert_redirected_to apartment_photos_url
  end
end
