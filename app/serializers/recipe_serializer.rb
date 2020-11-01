class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :flavor, :source, :liquors_string, :liqueurs_string, :mixers_string, :garnishes_string
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
