class EsQueryService
  MODELS_TO_SEARCH = [User, Project].freeze

  def initialize(keywords, params = nil)
    @keywords = keywords
    @params =   params || default_params
  end

  def search
    Elasticsearch::Model.search(query, MODELS_TO_SEARCH).results
  end

  def autocomplete
    @params[:analyzer] = 'autocomplete'

    Elasticsearch::Model.search(query, MODELS_TO_SEARCH).results
  end

  private

  def query
    {
      size:         @params[:size],
      query:        query_params,
      aggregations: aggregations
    }.compact
  end

  def query_params
    {
      multi_match: {
        query:     @keywords,
        analyzer:  @params[:analyzer],
        fuzziness: @params[:fuzziness],
        fields:    combine_search_fields
      }.compact
    }
  end

  def aggregations
    {}
  end

  def default_params
    {
      analyzer: nil,
      fuzziness: nil,
      size: nil
    }
  end

  def combine_search_fields
    MODELS_TO_SEARCH.map { |model| model.search_fields }.flatten.uniq
  end
end
