class RecipeSerializer

  def initialize(recipe)
    @recipe = recipe
  end

  def to_serialized_json
    @recipe.to_json(:include => {
      :liquors, :liqueurs, :mixers, :garnishes
    })
  end

end
