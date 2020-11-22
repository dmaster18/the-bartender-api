class Recipe < ApplicationRecord

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

  serialize :liquors_array, Array
  serialize :liqueurs_array, Array
  serialize :mixers_array, Array
  serialize :garnishes_array, Array
  serialize :all_ingredients, Array
  serialize :correct_ingredients, Array

  #accepts_nested_attributes_for :liquors, :liqueurs, :mixers, :garnishes

  before_save :complexity, :generate_question, :all_ingredients, :correct_ingredients



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
    self.complexity = difficulty
  end

  def generate_question
    liquors = []
    correct_liquors = self.liquors
    liquors << correct_liquors
    liquors.flatten
    liqueurs = []
    correct_liqueurs = self.liqueurs
    liqueurs << correct_liqueurs
    liqueurs.flatten
    mixers = []
    correct_mixers = self.mixers
    mixers << correct_mixers
    mixers.flatten
    garnishes = []
    correct_garnishes = self.garnishes
    garnishes << correct_garnishes
    garnishes.flatten
    correct_ingredients << correct_liquors << correct_liqueurs << correct_mixers << correct_garnishes
    correct_ingredients.flatten.shuffle!
    while liquors.length <= 5
      random_number = rand(1..216)
      random_liquor = Liquor.all.find(random_number)
      unless liquors.include?(random_liquor)
        liquors << random_liquor
      end
    end
    while liqueurs.length <= 5
      random_number = rand(1..173)
      random_liqueur = Liqueur.all.find(random_number)
      unless liqueurs.include?(random_liqueur)
        liqueurs << random_liqueur
      end
    end
    while mixers.length <= 5
      random_number = rand(1..308)
      random_mixer = Mixer.all.find(random_number)
      unless mixers.include?(random_mixer)
        mixers << random_mixer
      end
    end
    while garnishes.length <= 3
      random_number = rand(1..142)
      random_garnish = Garnish.all.find(random_number)
      unless garnishes.include?(random_garnish)
        garnishes << random_garnish
      end
    end
    all_ingredients << liquors << liqueurs << mixers << garnishes
    all_ingredients.flatten.shuffle!
  end

end
