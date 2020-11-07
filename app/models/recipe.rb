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
  serialize :all_ingredients, Array
  serialize :correct_ingredients, Array

  #accepts_nested_attributes_for :liquors, :liqueurs, :mixers, :garnishes

  before_save :complexity, :generate_question, :all_ingredients, :correct_ingredients

  #@all_ingredients = []
  #@correct_ingredients = []

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

  def generate_question
    liquors = []
    liqueurs = []
    mixers = []
    garnishes = []
    correct_liquors = self.liquors
    correct_liqueurs = self.liqueurs
    correct_mixers = self.mixers
    correct_garnishes = self.garnishes
    correct_ingredients << correct_liquors << correct_liqueurs << correct_mixers << correct_garnishes
    correct_ingredients.flatten
    liquors << correct_liquors
    liquors.flatten
    liqueurs << correct_liqueurs
    liqueurs.flatten
    mixers << correct_mixers
    mixers.flatten
    garnishes << correct_garnishes
    garnishes.flatten
    while liquors.length <= 7
      random_number = rand(1..216)
      random_liquor = Liquor.all.find(random_number)
      unless liquors.include?(random_liquor)
        liquors << random_liquor
      end
    end
    while liqueurs.length <= 7
      random_number = rand(1..173)
      random_liqueur = Liqueur.all.find(random_number)
      unless liqueurs.include?(random_liqueur)
        liqueurs << random_liqueur
      end
    end
    while (mixers.length <= 7)
      random_number = rand(1..308)
      random_mixer = Mixer.all.find(random_number)
      unless mixers.include?(random_mixer)
        mixers << random_mixer
      end
    end
    while (garnishes.length <= 4)
      random_number = rand(1..142)
      random_garnish = Garnish.all.find(random_number)
      unless garnishes.include?(random_garnish)
        garnishes << random_garnish
      end
    end
    all_ingredients << liquors << liqueurs << mixers << garnishes
    all_ingredients.flatten
  end

  #def all_ingredients
#    @all_ingredients
#  end

#  def correct_ingredients
#    @correct_ingredients
#  end

end
