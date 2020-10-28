class Liqueur < ApplicationRecord
  has_many :recipe_liqueurs
  has_many :recipes, through: :recipe_liqueurs
end
