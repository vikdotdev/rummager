class ElasticSearch::SuggestionService < ElasticSearch::Base
  def search
    @params[:analyzer] = 'autocomplete'

    Elasticsearch::Model
      .search(query, ElasticSearch::Base::MODELS_TO_SEARCH)
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
