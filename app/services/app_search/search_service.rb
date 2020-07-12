class AppSearch::SearchService < AppSearch::Base
  include AppSearch::Filters

  def search
    Elasticsearch::Model
      .search(query, AppSearch::MODELS_TO_SEARCH)
  end

  def stats
    params = {
      size:         0,
      aggregations: aggregations
    }.compact

    Elasticsearch::Model
      .search(params, AppSearch::MODELS_TO_SEARCH)
  end

  protected

  def query
    {
      size:         @options[:size],
      query:        search_query,
      aggregations: aggregations,
      highlight:    highlight
    }.compact
  end

  def search_query
    must = [
      { multi_match: multi_match }.compact,
      { terms: category_terms }.compact
    ].delete_if(&:empty?)

    {
      bool: {
        must: must,
        filter: rating_filter
      }
    }
  end

  def aggregations
    keyword_fields = fields_of_type('keyword').reduce({}) do |memo, field|
      memo.merge({
        "#{field}_distinct" => {
          terms: {
            field: field
          }
        }
      })
    end

    integer_fields = fields_of_type('integer').reduce({}) do |memo, field|
      memo.merge({
        "#{field}_stats" => {
          stats: {
            field: field
          }
        }
      })
    end

    keyword_fields.merge(integer_fields)
  end
end
