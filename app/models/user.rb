class User < ApplicationRecord
  validates :full_name, presence: true, length: { minimum: 3, maximum: 50 }
  validates :description, length: { maximum: 500 }
end
