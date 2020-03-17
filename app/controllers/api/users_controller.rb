class Api::UsersController < ActionController::API
  def index
    @users = User.search(params[:keywords]).results
  end
end
