class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description
      t.string :timing
      t.text :preparation
      t.string :iba_category
      t.string :flavor
      t.string :ingredient_string
      t.float :servings
      t.integer :time
      t.string :type
      t.string :style
      t.string :origin
      t.string :complexity
      t.boolean :shared?
      t.integer :general_ranking
      t.integer :user_ranking
      t.string :source
      t.text :liquors_array
      t.text :liqueurs_array
      t.text :mixers_array
      t.text :garnishes_array
      t.text :all_ingredients
      t.text :correct_ingredients

      t.timestamps
    end
  end
end
