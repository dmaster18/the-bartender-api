class LiquorsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :origin, :flavor, :ingredients
  has_many :recipes
end
