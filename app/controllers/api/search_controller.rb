class Api::SearchController < ApplicationController
  def index
    @search = ElasticSearch::SearchService
                 .new(params[:keywords], rating: JSON.parse(params[:rating]))
                 .search

    render :index
  end

  def autocomplete
    @hints = ElasticSearch::SuggestionService
               .new(params[:keywords], size: 10)
               .search
  end
end
