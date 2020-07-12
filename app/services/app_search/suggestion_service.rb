class AppSearch::SuggestionService < AppSearch::Base
  def search
    @options[:analyzer] = 'autocomplete'

    Elasticsearch::Model
      .search(query, AppSearch::MODELS_TO_SEARCH)
      .results
  end

  protected
 
  def query
    {
      size:         @options[:size],
      query:        { multi_match: multi_match },
      highlight:    highlight
    }.compact
  end
end
