class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :score
      t.string :percentage
      t.text :order_by_percentage
      t.text :order_by_score
      t.text :order_by_name


      t.timestamps
    end
  end
end
