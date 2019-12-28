test = Author.create(:name => "test", :password => "test")
book = Book.create(:title => "Test Book", :img => "https://www.comingsoon.net/nextraimages/hp7usfront.jpg", :author_id => test.id)
