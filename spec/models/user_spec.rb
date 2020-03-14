require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end

  it 'is valid with blank description' do
    user.description = ''
    expect(user).to be_valid
  end

  it 'is not valid with too long of a description' do
    user.description = 'a' * 501
    expect(user).not_to be_valid
  end

  it 'is not valid with blank full_name' do
    user.full_name = ''
    expect(user).not_to be_valid
  end

  it 'is not valid with too short of a full_name' do
    user.full_name = 'a' * 2
    expect(user).not_to be_valid
  end

  it 'is not valid with too long of a full_name' do
    user.full_name = 'a' * 51
    expect(user).not_to be_valid
  end
end
