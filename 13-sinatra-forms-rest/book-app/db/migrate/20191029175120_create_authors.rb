class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name

      t.timestamp
    end
  end
end
