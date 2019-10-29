class Books < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :author
      t.string :title
      t.text :snippet

      t.timestamps
    end
  end
end
