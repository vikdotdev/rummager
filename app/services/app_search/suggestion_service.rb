class AppSearch::SuggestionService < AppSearch::Base
  def search
    @params[:analyzer] = 'autocomplete'

    Elasticsearch::Model
      .search(query, AppSearch::MODELS_TO_SEARCH)
      .results
  end

  protected
 
  def query
    {
      size:         @params[:size],
      query:        { multi_match: multi_match },
      highlight:    highlight
    }.compact
  end
end
