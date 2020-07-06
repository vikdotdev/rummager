class ElasticSearch::Base
  MODELS_TO_SEARCH = [User, Project].freeze

  def initialize(keywords, params = {})
    @keywords = keywords
    @params = default_params.merge(params)
  end

  protected

  def default_params
    {
      analyzer: nil,
      fuzziness: nil,
      size: nil
    }
  end

  def multi_match
    {
      query:     @keywords,
      analyzer:  @params[:analyzer],
      fuzziness: @params[:fuzziness],
      fields:    text_fields
    }.compact
  end

  def highlight
    {
      pre_tags:  ["<em class='hl'>"],
      post_tags: ["</em>"],
      number_of_fragments: 0,
      fields: text_fields.reduce({}) { |memo, field| memo.merge(field => {}) }
    }
  end

  def text_fields
    MODELS_TO_SEARCH.map { |model| model::ES_TEXT_FIELDS }.flatten.uniq
  end

  def aggs_fields
    MODELS_TO_SEARCH.map { |model| model::ES_AGGS_FIELDS }.flatten.uniq
  end
end
