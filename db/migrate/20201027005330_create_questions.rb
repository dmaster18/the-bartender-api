class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :quiz_id
      t.string :name
      t.string :content
      t.string :answer
      t.boolean :correct?
      t.string :difficulty

      t.timestamps
    end
  end
end
