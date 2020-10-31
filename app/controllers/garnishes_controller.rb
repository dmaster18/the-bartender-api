class GarnishesController < ApplicationController
  def index
    garnishes = Garnish.all
    render json: GarnishSerializer.new(garnishes)
  end

  def show
    garnish = Garnish.find_by(id: params[:id])
    options = {
      include: [:recipes]
    }
    render json: GarnishSerializer.new(garnish, options)
  end

end
