class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :flavor, :source
  has_many :mixers, :garnishes, :liquors, :liqueurs
  belongs_to :user
end
