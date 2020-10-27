class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :recipe_id
      t.string :name
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
