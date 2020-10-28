class CreateRecipeMixers < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_mixers do |t|
      t.integer :recipe_id
      t.integer :mixer_id

      t.timestamps
    end
  end
end
