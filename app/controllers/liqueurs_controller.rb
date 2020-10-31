class LiqueursController < ApplicationController
  def index
    liqueurs = Liqueur.all
    render json: LiqueurSerializer.new(liqueurs)
  end

  def show
    liqueur = Liqueur.find_by(id: params[:id])
    options = {
      include: [:recipes]
    }
    render json: LiqueurSerializer.new(liqueur, options)
  end

end
