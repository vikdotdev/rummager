FactoryBot.define do
  factory :user do
    full_name { Faker::Name.name }
    description { Faker::Lorem.paragraph }
  end
end
