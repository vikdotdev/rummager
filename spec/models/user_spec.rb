require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end

  it 'is valid with blank description' do
    user.bio = ''
    expect(user).to be_valid
  end

  it 'is not valid with too long of a description' do
    user.bio = 'a' * 501
    expect(user).not_to be_valid
  end

  it 'is not valid with blank first_name' do
    user.first_name = ''
    expect(user).not_to be_valid
  end

  it 'is not valid with blank last_name' do
    user.last_name = ''
    expect(user).not_to be_valid
  end

  it 'is not valid with too short of a first_name' do
    user.first_name = 'a' * 1
    expect(user).not_to be_valid
  end

  it 'is not valid with too short of a last_name' do
    user.last_name = 'a' * 1
    expect(user).not_to be_valid
  end

  it 'is not valid with too long of a first_name' do
    user.first_name = 'a' * 51
    expect(user).not_to be_valid
  end

  it 'is not valid with too long of a last_name' do
    user.last_name = 'a' * 51
    expect(user).not_to be_valid
  end
end
