class RecipesController < ApplicationController
  def index
    recipes = Recipe.all #Add shuffle method to the backend as well as record total number of recipes
    options = {
      include: [:mixers, :garnishes, :liquors, :liqueurs]
    }
    render json: RecipeSerializer.new(recipes, options)
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    options = {
      include: [:mixers, :garnishes, :liquors, :liqueurs]
    }
    render json: RecipeSerializer.new(recipe, options)
  end


end
