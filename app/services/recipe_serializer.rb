class RecipeSerializer

  def initialize(recipe)
    @recipe = recipe
  end

  def to_serialized_json
    options = {include:
      {
      #:liquors, :liqueurs, :mixers, :garnishes
      }
    }
    @recipe.to_json(options)
  end


end
