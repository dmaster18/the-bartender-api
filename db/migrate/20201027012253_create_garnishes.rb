class CreateGarnishes < ActiveRecord::Migration[6.0]
  def change
    create_table :garnishes do |t|
      t.string :name
      t.string :type

      t.timestamps
    end
  end
end
