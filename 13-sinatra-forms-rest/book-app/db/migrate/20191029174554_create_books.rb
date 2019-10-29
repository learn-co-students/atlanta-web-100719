class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :snippet
      t.references :author

      t.timestamp
    end
  end
end
