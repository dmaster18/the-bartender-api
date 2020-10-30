class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :flavor, :source
  has_many :mixers#, serializer: MixerSerializer
  has_many :garnishes#, serializer: GarnishSerializer
  has_many :liquors#, serializer: LiquorSerializer
  has_many :liqueurs#, serializer: LiqueurSerializer
end
