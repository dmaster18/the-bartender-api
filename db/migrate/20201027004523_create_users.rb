class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.float :score
      t.float :percentage
      t.string :difficulty

      t.timestamps
    end
  end
end
