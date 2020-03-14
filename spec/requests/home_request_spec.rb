require 'rails_helper'

RSpec.describe HomeController, type: :request do
  it "root returns http success" do
    get root_path
    expect(response).to have_http_status(:success)
  end
end
