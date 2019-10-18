# Awesome! We've created some models and a database to work with. 
# Let's add some content. 



# Create a new post.

post = Post.new


# Give the post a title. 

post.title = "YEET!"

# Add some body content to the post. 

post.content = "Today, we yeeted without our haw. Yesterday, the haw was yeeted."


# Save the post to persist it in our local database (stored in RAM)

post.save

# Add a comment to our post. 

post.comments.create(content: "I DON'T LIKE YEETIN' HAWS!!!")


# Add another one! 

post.comments.create(content: "I like yeetin' haws. :D")


# Show EACH post and the comments for each in output. 

post.find_each do |post|
    p post.comments
end


# What are some other CRUD operations that we can try? 



