class CreateRants < ActiveRecord::Migration[5.2]
  def change
    create_table :rants do |t|
      t.text :content
      t.references :user
      
      t.timestamps
    end
  end
end
