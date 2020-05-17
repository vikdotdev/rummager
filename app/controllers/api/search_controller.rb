class Api::SearchController < ApplicationController
  def index
    @results = EsQueryService.new(params[:keywords]).search

    render :index
  end

  def autocomplete
    @hints = EsQueryService.new(params[:keywords], size: 10).autocomplete
  end
end
