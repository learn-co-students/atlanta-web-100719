require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  use Rack::MethodOverride

  # Delete
  delete '/books/:id' do
    @book = Book.find_by(
      :id => params[:id]
    )
    @book.destroy
    redirect to '/books'
  end

  get '/books/:id' do
    @book = Book.find_by(
      :id => params[:id]
    )
    @title = @book.title
    erb :show
  end


  # CREATE
  get "/books/new" do
    erb :new
  end

  post "/books/create" do
    @book = Book.create(params)
    erb :show
  end

  # READING
  get "/books" do
    @books = Book.all
    erb :index
  end

end
