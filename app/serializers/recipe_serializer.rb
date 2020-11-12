class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :flavor, :source, :liquors_array, :liqueurs_array, :mixers_array, :garnishes_array, :all_ingredients, :correct_ingredients, :complexity
  has_many :mixers
  has_many :garnishes
  has_many :liquors
  has_many :liqueurs

  attribute :mixers do |object|
    object.mixers.as_json
  end

  attribute :garnishes do |object|
    object.garnishes.as_json
  end

  attribute :liquors do |object|
    object.liquors.as_json
  end

  attribute :liqueurs do |object|
    object.liqueurs.as_json
  end


end
