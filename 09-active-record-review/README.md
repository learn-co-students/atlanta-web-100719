# Active Record Associations

## SWBATs
Today, we're going to integrate the knowledge we've gained about ActiveRecord. Again, we're using ActiveRecord as the M in our MVC structure, to create, read, update, and destroy Ruby objects as they allude to a database.

- Understand dependencies and how they work in a gemfile
- set up an instance of ActiveRecord that exists locally
- set up database tables and columns (attributes)
- set up model classes with associations
- perform CRUD operations on our models


## Understand dependencies and how they work in a gemfile

We're going to make a blog in our example, using a pared-down method of instantiating ActiveRecord. To begin, we'll need to include in our files any required dependencies that help us to create and access a database. 

A gemfile does the same thing. Using Bundler, we include all the necessary dependencies we'd use to creat our app. 

Hop over to `blog.rb` to see the dependencies needed to create our blog. 



## Set up an instance of ActiveRecord that exists locally

We are going to take a set of deliverables and set up a database using our 
memory! This is not advisable for apps you want to share with others, because 
it's not saved on disk. With the special value of ":memory:", SQLite3 can write everything to a database in RAM, rather than a file on disk.

Let's instantiate ActiveRecord for our blog on `blog.rb`. 




## Set up database tables and columns (attributes)

We need tables in order to manipulate objects with ActiveRecord. Let's talk out the schema needed in plain English when creating a blog. 

We want a blog that has posts. The posts have many comments, which belong to each post. What sort of relationship is this? 

--> one to many

What other relationships could blogs have? 

--> one to many, many to many, has many through 

These are some of the common relationships that are performed in ActiveRecord


## Set up model classes with associations

Now that we've determined how we'll create our blog, we need to set up the relationships by creating models that contain familiar syntax. Hop over to `blog.rb` to create a has-many relationship between posts and comments. 

What other relationships could we try? 

has many, has many through 

## Perform CRUD operations on our models

Let's try a few deliverables! Hop over to `our-code.rb` to see those in action. 

THERE IS AN ERROR (HAHAHAHAHA)! See if you can figure it out to see your blog in action.