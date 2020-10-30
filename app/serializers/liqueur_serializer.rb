class LiqueurSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :origin, :flavor
  has_many :recipes
end
