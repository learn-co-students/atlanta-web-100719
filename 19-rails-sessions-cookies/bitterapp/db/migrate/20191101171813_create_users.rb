class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.text :bio
      t.string :email
      t.string :location
      
      t.timestamps
    end
  end
end
