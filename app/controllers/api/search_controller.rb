class Api::SearchController < ApplicationController
  def index
    @search = AppSearch::SearchService
                 .new(params[:keywords],
                      rating: JSON.parse(params[:rating]),
                      categories: params[:categories])
                 .search

    render :index
  end

  def autocomplete
    @hints = AppSearch::SuggestionService
               .new(params[:keywords], size: 10)
               .search
  end

  def stats
    @stats = AppSearch::SearchService.new.stats
  end
end
