class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :description
      t.string :type
      t.string :street
      t.string :city
      t.string :state
      t.string :zip_code
      t.integer :review_score
      t.string :comment

      t.timestamps
    end
  end
end
