class SessionsController < ApplicationController

  def create
    @author = Author.find_by(name: session_params[:name])

    if @author && @author.authenticate(session_params[:password])
      token = JWT.encode({ author_id: @author.id}, ENV['SECRET'])
      render :json => { :token => token }, status: :ok
    else
      render :json => { :message => "Login failed.." }, status: :ok
    end
  end

  def destroy
  end

  private
  def session_params
    params.require(:author).permit(:name,:password)
  end
end
