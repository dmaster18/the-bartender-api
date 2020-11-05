class CreateLiqueurs < ActiveRecord::Migration[6.0]
  def change
    create_table :liqueurs do |t|
      t.string :name
      t.string :liqueur_type
      t.string :description
      t.string :origin
      t.string :flavor
      t.string :abv
      t.string :color
      t.boolean :correct?

      t.timestamps
    end
  end
end
