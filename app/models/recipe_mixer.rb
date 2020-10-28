class RecipeMixer < ApplicationRecord
  belongs_to :recipe
  belongs_to :mixer
end
