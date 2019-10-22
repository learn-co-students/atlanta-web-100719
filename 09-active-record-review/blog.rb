# Here are a set of deliverables that we'll work on and run together.
# Check out the README for more info. 

# Add our required files (one error was here- Javi said it! We need to require ActiveRecord before using it.)
require 'sqlite3'
require 'active_record'


# Set up a database that resides in RAM - (this is where one error was located- spacing!)
ActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: ':memory:')


# Set up database tables and columns
ActiveRecord::Schema.define do
    create_table "posts", force: :cascade do |t|
        t.text "content"
        t.string "name"
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
    end 

    create_table "comments", force: :cascade do |t|
        t.text "content"
        t.integer "post_id" # and here is how we create relationships- a comment BELONGS TO a post, aligning with it's id
        t.index ["post_id"], name: "index_comment_on_post_id"
        t.string "title" # look right here- we said that to have a comment we need a title and content, but didn't add titles!
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
