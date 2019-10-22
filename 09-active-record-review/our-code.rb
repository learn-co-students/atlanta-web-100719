# Awesome! We've created some models and a database to work with. 
# Let's add some content. 


# Deliverables from our-code.rb! 
#Here's the code that works. Look through this and compare it to what we went over in class to understand the errors.

require './blog' # we need to require `blog.rb` with the declarations that we made about posts and comments.

# Create a new post.

post = Post.new


# Give the post a title. 

post.name = "YEET!" # we originally had "post.title" - did we call it NAME, or title? Always check what you wrote.


# Add some body content to the post. 

post.content = "Today, we yeeted without our haw. Yesterday, the haw was yeeted."


# Save the post to persist it in our local database (stored in RAM)

post.save


# Add a comment to our post. 

post.comments.create(content: "I DON'T LIKE YEETIN' HAWS!!!")


# Add another one! 

post.comments.create(content: "I like yeetin' haws. :D")


# Show EACH post and the comments for each in output. 

Post.find_each do |post|
    p post.comments
end