# Intro to ActiveRecord

## SWBATs (Students Will Be Able To)

- Describe how gems work and the value of shared code
- Explain how rake works and how to run rake tasks
- Break down common files in a Rails/ActiveRecord app
- Understand what ActiveRecord is doing visually and conceptually


## Gems Review

Gems are a snippet of code built by other engineers to speed up YOUR development process in Ruby. Sharing code in this way increases the learning and efficiency for all engineers, and is encouraged in the industry.


### Rake and File Structure


#### What's Rake? What's a Rakefile? 

  - Rake is a utility to handle admin tasks and commands. 
  - A Rakefile defines tasks to be run from the command line.
  - To view tasks, run `rake -T` from your terminal
  - Tasks allow us to encapsulate ruby code that we want to execute.
  - We're getting some tasks from the `sinatra/activerecord/rake` library which gives us easy to use ActiveRecord tasks (we can see this included in our gemfile)

-------


#### ActiveRecord File Structure Review

Here's some of the common files you'll find in an app with ActiveRecord in use. Again, we're using ActiveRecord as the M in our MVC structure, to handle, create, and augment Ruby objects as they allude to a database.


  - Gemfile––what is a gemfile? Why on earth would we want to use one?
  --> to get access to gems we need to run our app!!!!  (TRUE)

  We use a gemfile to let us know the basic requirements to run the app we've created. Gemfile.lock lets us know which dependencies were installed. 

  - `app` folder holds our models––our Ruby classes
  --> We examined this folder and saw that Ruby classes have been created in a familiar way (from when we created raw Ruby classes), but has a few new things: 

  class Squirrel < ActiveRecord::Base

  It looks like ActiveRecord is instantiated here in some way. How does this inclusion make our classes function differently? We'll examine this more when we move into creating with ActiveRecord. 

  - `db` directory holds migrations, a schema file, and a seeds.rb file
  
  --> seeds.rb lists seed data that we're giving our app to pull from. 
  --> schema.rb is our schema that was auto-generated from the current state of the database. Look at `t` - what is it doing in the schema as it relates to creating a table?

  --> migrations- there's a lot of migrations with a timestamp before the filename. Why is this? 

Migrations alter your database schema in some way, and timestamps are an **auto-generated** way to know when you've altered the schema. Here's a resource: [ActiveRecord Migrations](https://guides.rubyonrails.org/active_record_migrations.html)

  - `config` holds environment files

    - `require 'bundler'` and `Bundler.require` **load all of the gems in our Gemfile**
    - `ActiveRecord::Base.establish_connection` **sets up our database** 
    - `require_all` **loads all of our application code**


Keep this app as a reference to how an app looks with ActiveRecord working. In order to appreciate the magic that ActiveRecord does for us (and to debug if something goes wrong), it's wise to understand what each of the major files are doing. 

Look through this app and familiarize yourself with what's going on to understand what you can do with Ruby objects with the help of ActiveRecord. 







