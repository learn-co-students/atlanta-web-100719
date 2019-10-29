@author1 = Author.create(:name => "J K Crawling")
@author2 = Author.create(:name => "Steph Queen")

@book1 = Book.create(
  :title => "Sharry Shpotter",
  :snippet => "This is the best book ever..",
  :author_id => @author1.id
)
@book2 = Book.create(
  :title => "Sharry Shpotter Part 2",
  :snippet => "This is the second best book ever..",
  :author_id => @author1.id
)
@book1 = Book.create(
  :title => "Forget IT",
  :snippet => "This is the worst book ever..",
  :author_id => @author2.id
)
