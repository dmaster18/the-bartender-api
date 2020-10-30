class RecipeSerializer

  def initialize(recipe)
    @recipe = recipe
  end

  def to_serialized_json
    @recipe.to_json(:include => {
      :bird => {:only => [:name, :species]},
      :location => {:only => [:latitude, :longitude]}
    }, :except => [:updated_at])
  end

end
