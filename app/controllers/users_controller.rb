class UsersController < ApplicationController
  def index
    users = User.all
    render json: UserSerializer.new(users)
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user)
  end

  private

  def user_params
    params.require(:user).permit(:name, :score, :percentage)
  end

end
