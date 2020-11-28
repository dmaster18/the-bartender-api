class RecipesController < ApplicationController
  def index
    if params[:complexity] == nil || params[:complexity] == "Random"
      recipes = Recipe.limit(params[:limit] || 20).offset(params[:offset] || 0)
    else
      recipes = Recipe.where(complexity: params[:complexity]).limit(params[:limit] || 75)#.offset(params[:offset] || 0)
    end
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
