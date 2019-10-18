# Here are a set of deliverables that we'll work on and run together.
# Check out the README for more info. 


# Set up a database that resides in RAM
ActiveRecord::Base.establish_connection (
    adapter: 'sqlite3',
    database: ':memory:'
)


# Set up database tables and columns
ActiveRecord::Schema.define do
    create_table "posts", force: :cascade do |t|
        t.text "content"
        t.string "name"
        t.integer "post_id"
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
        t.index ["post_id"], name: "index_comment_on_post_id"
    end 

    create_table "comments", force: :cascade do |t|
        t.text "content"
        t.string "title"
        t.datetime "created_at", null: false
    end
end

# Set up model classes

class ApplicationRecord < ActiveRecord::Base
    self.abstract_class = true
end

class Comment < ApplicationRecord
    belongs_to :post
end

class Post < ApplicationRecord
    has_many :comments
end
