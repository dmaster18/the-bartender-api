class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipesSerializer.new(recipes)
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    options = {
      include: [:user, :mixers, :garnishes, :liquors, :liqueurs]
    }
    render json: RecipesSerializer.new(recipe, options)
  end


end
