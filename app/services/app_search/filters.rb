module AppSearch
  module Filters
    def rating_filter
      {
        range: {
          rating: {
            gte: @params[:rating]['min'],
            lte: @params[:rating]['max']
          }
        }
      }
    end

    def category_terms
      return if @params[:categories].nil? || @params[:categories]&.empty?
      { category: @params[:categories] }
    end
  end
end
