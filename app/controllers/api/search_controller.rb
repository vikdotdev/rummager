class Api::SearchController < ApplicationController
  MODELS_TO_SEARCH = [User, Project].freeze

  def index
    @results = Elasticsearch::Model.search(query, MODELS_TO_SEARCH).results
  end

  def autocomplete
    @hints = Elasticsearch::Model.search(
      query(analyzer: 'autocomplete', size: 10)
    ).results
  end

  private

  def query(analyzer: nil, fuzziness: nil, size: nil)
    {
      size: size,
      query: query_params(analyzer, fuzziness),
      aggregations: aggregations
    }.compact
  end

  def query_params(analyzer, fuzziness)
    {
      multi_match: {
        query: params[:keywords],
        analyzer: analyzer,
        fuzziness: fuzziness,
        fields: combine_search_fields
      }.compact
    }
  end

  def aggregations
    {}
  end

  def combine_search_fields
    MODELS_TO_SEARCH.map { |model| model.search_fields }.flatten.uniq
  end
end
