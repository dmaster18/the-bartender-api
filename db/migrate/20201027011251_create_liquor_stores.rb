class CreateLiquorStores < ActiveRecord::Migration[6.0]
  def change
    create_table :liquor_stores do |t|

      t.timestamps
    end
  end
end
