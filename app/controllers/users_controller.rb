class UsersController < ApplicationController
  def index
    @user = User.create(user_params)
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:name, :score, :percentage)
  end

end
