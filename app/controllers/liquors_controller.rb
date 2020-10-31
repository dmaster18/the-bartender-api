class LiquorsController < ApplicationController
  def index
    liquors = Liquor.all
    render json: LiqueurSerializer.new(liquors)
  end

  def show
    liquor = Liquor.find_by(id: params[:id])
    options = {
      include: [:recipes]
    }
    render json: LiqueurSerializer.new(liquor, options)
  end

end
