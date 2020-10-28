class RecipeLiqueur < ApplicationRecord
  belongs_to :recipe
  belongs_to :liqueur
end
