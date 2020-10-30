class MixerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :recipes, serializer: RecipeSerializer
end
