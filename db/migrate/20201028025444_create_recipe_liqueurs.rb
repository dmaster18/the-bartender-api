class CreateRecipeLiqueurs < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_liqueurs do |t|
      t.integer :recipe_id
      t.integer :liqueur_id

      t.timestamps
    end
  end
end
