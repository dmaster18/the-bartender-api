class Garnish < ApplicationRecord
  has_many :recipe_garnishes
  has_many :recipes, through: :recipe_garnishes
end
