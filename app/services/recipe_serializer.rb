class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  has_many :liquors, :liqueurs, :mixers, :garnishes
#  def initialize(recipe)
#    @recipe = recipe
#  end

  #def to_serialized_json
  #  options = {include:
  #    {
      #:liquors, :liqueurs, :mixers, :garnishes
  #    }
#    }
#    @recipe.to_json(options)
#3  end


end
