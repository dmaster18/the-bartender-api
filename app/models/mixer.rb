class Mixer < ApplicationRecord
  has_many :recipe_mixers
  has_many :recipes, through: :recipe_mixers
end
