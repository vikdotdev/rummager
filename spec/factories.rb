FactoryBot.define do
  factory :project do
    name { Faker::Company.name }
    description { Faker::Lorem.paragraph }
    rating { rand(1..10) }
    category { %i[internet tech marketing opensource].sample }
  end

  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    bio { Faker::Lorem.paragraph }
  end
end
