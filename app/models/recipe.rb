class Recipe < ApplicationRecord
  #has_many :recipe_ingredients
  #has_many :ingredients, through: :recipe_ingredients
  has_many :recipe_liquors
  has_many :liquors, through: :recipe_liquors
  has_many :recipe_liqueurs
  has_many :liqueurs, through: :recipe_liqueurs
  has_many :recipe_mixers
  has_many :mixers, through: :recipe_mixers
  has_many :recipe_garnishes
  has_many :garnishes, through: :recipe_garnishes
  has_many :user_recipes
  has_many :users, through: :user_recipes

  validates :name, presence: true
  validates :name, uniqueness: true

  serialize :liquors_string, Array
  serialize :liqueurs_string, Array
  serialize :mixers_string, Array
  serialize :garnishes_string, Array
end
