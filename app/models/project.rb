class Project < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates :name, presence: true, length: { minimum: 2, maximum: 50 }
  validates :description, length: { maximum: 500 }
  validates :rating, length: { minimum: 1, maximum: 10 }

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
      indexes :name,
        type: 'text',
        analyzer: 'autocomplete',
        search_analyzer: 'standard'
      indexes :rating
    end
  end

  def self.search_fields
    mappings.to_hash[:properties].keys
  end
end
