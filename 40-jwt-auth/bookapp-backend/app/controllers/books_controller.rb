class BooksController < ApplicationController

  before_action :authenticate!, only: [:create]

  def index
    @books = Book.all
    render :json => { :books => @books }, status: :ok
  end

  def create
    @book = Book.new(book_params)
    byebug
    @book.author = Author.find_by(id: current_user.id)

    if @book.save
      render :json => @book, status: :ok
    else
      render :json => { :message => "Book creation failed." }, status: :ok
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :img, :read)
  end

end
