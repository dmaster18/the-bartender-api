class CreateLiquors < ActiveRecord::Migration[6.0]
  def change
    create_table :liquors do |t|
      t.string :name
      t.string :type
      t.string :origin
      t.string :flavor
      t.string :abv
      t.string :color
      t.string :ingredients

      t.timestamps
    end
  end
end
