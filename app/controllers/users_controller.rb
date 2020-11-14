class UsersController < ApplicationController
  def new
    user = User.new
  end

  def create
    user = User.create(name: params[:user][:name], score: params[:user][:score], percentage: params[:user][:percentage])
    render 'C:\Users\user\Google Drive\Flatiron School Boot Camp\Portfolio Projects\Portfolio Project #4\the-bartender-api\front_end\htmls\leaderboard.html'

  def index
    #user = User.create(name: params[:user][:name], score: params[:user][:score], percentage: params[:user][:percentage])
    users = User.all
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
