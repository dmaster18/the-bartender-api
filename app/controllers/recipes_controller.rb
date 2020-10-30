class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes)
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    options = {
      include: [:mixers, :garnishes, :liquors, :liqueurs]
    }
    render json: RecipeSerializer.new(recipe, options)
  end


end
