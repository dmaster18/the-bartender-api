class UsersController < ApplicationController
  def new
    user = User.new
  end

  def create
    user = User.create(name: params[:user][:name], score: params[:user][:score], percentage: params[:user][:percentage])
    redirect_to 'leaderboard.html'
  end

  def index
    #user = User.create(name: params[:user][:name], score: params[:user][:score], percentage: params[:user][:percentage])
    users = User.order_by_percentage
    render json: UserSerializer.new(users)
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user)
  end

  private

  ##def user_params
  ##  params.require(:user).permit(:name, :score, :percentage)
  ##end

end
