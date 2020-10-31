class LiquorsController < ApplicationController
  def index
    liquors = Liquor.all
    render json: LiquorSerializer.new(liquors)
  end

  def show
    liquor = Liquor.find_by(id: params[:id])
    options = {
      include: [:recipes]
    }
    render json: LiquorSerializer.new(liquor, options)
  end

end
