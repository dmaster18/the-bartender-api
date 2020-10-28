class RecipeLiquor < ApplicationRecord
  belongs_to :recipe
  belongs_to :liquor
end
