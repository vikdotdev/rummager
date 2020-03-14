class Api::UsersController < ActionController::API
  def index
    @users = User.all

    render json: @users, status: 200
  end

  def show
    @user = User.find(users_params[:id])

    render json: @user, status: 200
  end

  private

  def users_params
    params.permit(:id)
  end
end
