class RecipeGarnish < ApplicationRecord
  belongs_to :recipe
  belongs_to :garnish
end
