class CreateRecipeLiquors < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_liquors do |t|
      t.integer :recipe_id
      t.integer :liquor_id

      t.timestamps
    end
  end
end
