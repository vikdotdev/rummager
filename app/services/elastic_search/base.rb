class ElasticSearch::Base
  MODELS_TO_SEARCH = [User, Project].freeze

  def initialize(keywords = '', params = {})
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
    return if @keywords.blank?

    {
      query:     @keywords,
      analyzer:  @params[:analyzer],
      fuzziness: @params[:fuzziness],
      fields:    fields_of_type('text')
    }.compact
  end

  def highlight
    {
      pre_tags:  ["<em class='hl'>"],
      post_tags: ["</em>"],
      number_of_fragments: 0,
      fields: fields_of_type('text').reduce({}) { |memo, field| memo.merge(field => {}) }
    }
  end

  # def text_fields
  #   MODELS_TO_SEARCH.map { |model| model::ES_TEXT_FIELDS }.flatten.uniq
  # end

  # def aggs_fields
  #   MODELS_TO_SEARCH.map { |model| model::ES_AGGS_FIELDS }.flatten.uniq
  # end

  def fields_of_type(type)
    MODELS_TO_SEARCH.map do |model|
      model.mappings.to_hash[:properties].map do |key, value|
        key if value[:type] == type
      end.compact
    end.flatten.uniq
  end
end
