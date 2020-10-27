class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.integer :score
      t.string :category
      t.string :length
      t.string :difficulty
      t.boolean :shared?

      t.timestamps
    end
  end
end
