class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :score
      t.string :percentage



      t.timestamps
    end
  end
end
