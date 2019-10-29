class BooksController < ApplicationController

  # GET: /books
  get "/books" do
    @books = Book.all
    erb :"/books/index.html"
  end

  # GET: /books/new
  get "/books/new" do
    @authors = Author.all
    erb :"/books/new.html"
  end

  # POST: /books
  post "/books" do
    @author = Author.find_by(
      name: params[:book][:author]
    )

    @book = Book.new(
      title: params[:book][:title],
      snippet: params[:book][:snippet],
      author_id: @author.id
    )

    if @book.save
      redirect "/books"
    end

  end

  # GET: /books/5
  get "/books/:id" do
    @book = Book.find_by(id: params[:id])
    erb :"/books/show.html"
  end

  # GET: /books/5/edit
  get "/books/:id/edit" do
    @book = Book.find_by(id: params[:id])
    @authors = Author.all

    erb :"/books/edit.html"
  end

  # PATCH: /books/5
  patch "/books/:id" do

    # Uncomment this and checkout the params hash
    # binding.pry

    @book = Book.find_by(id: params[:id])
    @author = Author.find_by(name: params[:book][:author])

    @book.update(
      title: params[:book][:title],
      snippet: params[:book][:snippet],
      author_id: @author.id
    )
    redirect "/books/#{@book.id}"
  end

  # DELETE: /books/5/delete
  delete "/books/:id/delete" do
    @book = Book.find_by(id: params[:id])
    @book.destroy
    redirect "/books"
  end
end
