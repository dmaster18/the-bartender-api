class Recipe < ApplicationRecord
  #has_many :recipe_ingredients
  #has_many :ingredients, through: :recipe_ingredients

  attr_accessor :liquors_array, :liqueurs_array, :mixers_array, :garnishes_array

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

  serialize :liquors_array, Array
  serialize :liqueurs_array, Array
  serialize :mixers_array, Array
  serialize :garnishes_array, Array

  #accepts_nested_attributes_for :liquors, :liqueurs, :mixers, :garnishes

end
