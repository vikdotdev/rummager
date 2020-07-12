module AppSearch
  module Filters
    def rating_filter
      {
        range: {
          rating: {
            gte: @options[:rating][:min],
            lte: @options[:rating][:max]
          }
        }
      }
    end

    def category_terms
      return if @options[:categories].blank?

      { category: @options[:categories] }
    end
  end
end
