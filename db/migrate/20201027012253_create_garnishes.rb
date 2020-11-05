class CreateGarnishes < ActiveRecord::Migration[6.0]
  def change
    create_table :garnishes do |t|
      t.string :name
      t.string :garnish_type
      t.boolean :correct?

      t.timestamps
    end
  end
end
