require 'rails_helper'

RSpec.describe Api::SearchController, :elasticsearch, type: :request do
  describe '#index' do
    let!(:user_1) { create(:user, first_name: 'Willy', last_name: 'Wonka') }
    let!(:user_2) { create(:user, first_name: 'Barry', last_name: 'Lisner') }
    let!(:project_1) { create(:project, name: 'Willy LLC') }
    let!(:project_2) { create(:project, name: 'Something') }

    before do
      refresh_index!

      get api_search_index_path,
        as: :json,
        params: { keywords: "willy" }
    end

    subject { JSON.parse(response.body)['data'] }

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns correct results' do
      user_result = {
        first_name: user_1.first_name,
        id:         user_1.id.to_s,
        last_name:  user_1.last_name,
        type:       user_1.class.to_s,
      }.with_indifferent_access
      project_result = {
        id:     project_1.id.to_s,
        name:   project_1.name,
        # rating: project_1.rating,
        type:   project_1.class.to_s
      }.with_indifferent_access

      expect(subject).to match(a_collection_including(
                                 a_hash_including(user_result),
                                 a_hash_including(project_result)))
    end
  end

  describe '#autocomplete' do
    let!(:user_1) { create(:user, first_name: 'Willy', last_name: 'Wonka') }
    let!(:user_2) { create(:user, first_name: 'Ken', last_name: 'Borke') }
    let!(:project_1) { create(:project, name: 'Willies LLC') }
    let!(:project_2) { create(:project, name: 'Something') }

    before do
      refresh_index!

      get autocomplete_api_search_index_path,
        as: :json,
        params: { keywords: "will" }
    end

    subject { JSON.parse(response.body)['data'] }

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns correct result count' do
      result_json = [
        {
          first_name: user_1.first_name,
          id:         user_1.id.to_s,
          last_name:  user_1.last_name,
          type:       user_1.class.to_s,
        }.with_indifferent_access,
        {
          id:     project_1.id.to_s,
          name:   project_1.name,
          # rating: project_1.rating,
          type:   project_1.class.to_s
        }.with_indifferent_access
      ]

      expect(subject).to contain_exactly(*result_json)
    end
  end
end
