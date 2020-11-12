class UsersController < ApplicationController
  def index
    @user = User.create(name: name, score: score, percentage: percentage)
    @users = User.all
    @users
  end


end
