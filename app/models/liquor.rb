class Liquor < ApplicationRecord
  has_many :recipe_liquors
  has_many :recipes, through: :recipe_liquors
end
