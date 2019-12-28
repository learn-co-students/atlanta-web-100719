class AuthorsController < ApplicationController

  def create
    @author = Author.new(author_params)
    if @author.save
      token = JWT.encode({ author_id: @author.id}, ENV['SECRET'])
      render :json => { :token => token }, status: :ok
    else
      render :json => { :message => "User sign up failed.." }, status: :ok
    end
  end

  private
  def author_params
    params.require(:author).permit(:name, :password)
  end
end
