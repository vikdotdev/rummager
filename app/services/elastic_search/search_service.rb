class ElasticSearch::SearchService < ElasticSearch::Base
  def search
    Elasticsearch::Model
      .search(query, ElasticSearch::Base::MODELS_TO_SEARCH)
      # .results
  end

  protected

  def query
    {
      size:         @params[:size],
      query:        search_query,
      aggregations: aggregations,
      highlight:    highlight
    }.compact
  end

  def search_query
    must = {
      must: {
        multi_match: multi_match
      }
    }

    filter = {
      filter: {
        range: {
          rating: {
            gte: @params[:rating]['min'],
            lte: @params[:rating]['max']
          }
        }
      }
    }

    {
      bool: {}.merge(must).merge(filter)
    }

  end

  def aggregations
    aggs_fields.reduce({}) do |memo, field|
      memo.merge({
        "#{field}_stats" => {
          stats: {
            field: field
          }
        },
        "#{field}_distinct" => {
          terms: {
            field: field
          }
        }
      })
    end
  end
end
