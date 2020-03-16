class Api::UsersController < ActionController::API
  def index
    @users = User.search(params[:keywords]).results

    render json: @users, status: 200
  end

  def show
    @user = User.find(params[:id])

    render json: @user, status: 200
  end
end
