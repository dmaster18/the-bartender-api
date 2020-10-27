class CreateBars < ActiveRecord::Migration[6.0]
  def change
    create_table :bars do |t|

      t.timestamps
    end
  end
end
