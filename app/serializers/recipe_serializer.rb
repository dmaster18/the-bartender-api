class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :flavor, :source
  has_many :mixers
  has_many :garnishes
  has_many :liquors
  has_many :liqueurs
end
