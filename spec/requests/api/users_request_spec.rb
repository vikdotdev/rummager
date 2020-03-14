require 'rails_helper'

RSpec.describe Api::UsersController, type: :request do
  let(:users) { create_list(:user, 3) }
  let(:user) { users.first }

  describe '#index' do
    it 'returns http success' do
      get api_users_path
      expect(response).to have_http_status(:success)
    end

    it 'returns correct user count' do
      get api_users_path
      expect(JSON.parse(response.body).count.to_i).to eq(User.count)
    end
  end

  describe '#show' do
    it 'returns http success' do
      debugger
      get api_user_path(id: user.id)
      expect(response).to have_http_status(:success)
    end
  end
end
