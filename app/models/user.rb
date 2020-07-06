class User < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates :first_name, presence: true, length: { minimum: 2, maximum: 50 }
  validates :last_name, presence: true, length: { minimum: 2, maximum: 50 }
  validates :bio, length: { maximum: 500 }

  ES_TEXT_FIELDS = %i[first_name last_name]
  ES_AGGS_FIELDS = %i[rating]

  ES_SETTINGS = {
    analysis: {
      analyzer: {
        autocomplete: {
          tokenizer: 'autocomplete',
          filter: ['lowercase']
        }
      },
      tokenizer: {
        autocomplete: {
          type: 'edge_ngram',
          min_gram: 2,
          max_gram: 10,
          token_chars: ['letter']
        }
      }
    }
  }

  settings ES_SETTINGS do
    mappings dynamic: 'false' do
      indexes :first_name,
        type: 'text',
        analyzer: 'autocomplete',
        search_analyzer: 'standard'
      indexes :last_name,
        type: 'text',
        analyzer: 'autocomplete',
        search_analyzer: 'standard'
    end
  end

  def self.search_fields
    mappings.to_hash[:properties].keys
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
