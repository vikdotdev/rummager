require 'rails_helper'

RSpec.describe Api::UsersController, type: :request do
  let(:users) { create_list(:user, 3) }
  let(:user) { users.first }

  describe '#index' do
    it 'returns http success' do
      skip 'replaced by search_controller'

      get api_users_path, as: :json
      expect(response).to have_http_status(:success)
    end

    it 'returns correct user count' do
      skip 'replaced by search_controller'

      get api_users_path, as: :json
      expect(JSON.parse(response.body)['data'].count.to_i).to eq(User.count)
    end
  end

  describe '#show' do
    it 'returns http success' do
      skip 'replaced by search_controller'

      get api_user_path(id: user.id)
      expect(response).to have_http_status(:success)
    end
  end
end
