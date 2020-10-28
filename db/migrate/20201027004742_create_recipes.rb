class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description
      t.string :flavor
      t.text :instructions
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
      t.text :liquors_string
      t.text :liqueurs_string
      t.text :mixers_string
      t.text :garnishes_string

      t.timestamps
    end
  end
end
