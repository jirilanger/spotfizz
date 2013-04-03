require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get cz" do
    get :cz
    assert_response :success
  end

end
