class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :username_confirmation
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :password_confirmation
      t.integer :uid
      t.string :zip_code
      t.boolean :password_required

      t.timestamps
    end
  end
end
