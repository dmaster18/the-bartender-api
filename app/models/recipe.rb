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

  serialize :liquors_array, Array
  serialize :liqueurs_array, Array
  serialize :mixers_array, Array
  serialize :garnishes_array, Array

  #accepts_nested_attributes_for :liquors, :liqueurs, :mixers, :garnishes

  before_create :complexity

  def complexity
    total_ingredients = self.liquors.size + self.liqueurs.size + self.mixers.size + self.garnishes.size
    difficulty = "Easy"
    if total_ingredients <= 3
      difficulty = "Easy"
    elsif total_ingredients <= 5
      difficulty = "Medium"
    elsif total_ingredients <= 7
      difficulty = "Hard"
    else
      difficulty = "Very Hard"
    end
    difficulty
  end

end
