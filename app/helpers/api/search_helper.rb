module Api::SearchHelper
  def index_to_model(result)
    result._index.singularize.capitalize
  end

  def result_search_fields(result)
    index_to_model(result).constantize.search_fields
  end
end
