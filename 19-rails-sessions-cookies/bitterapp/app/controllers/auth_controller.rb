class AuthController < ApplicationController

  def login
    render :login
  end

  def create_login
    @user = User.find_by(
      username: session_params[:username]
    )
    if @user && @user.password.eql?(session_params[:password])
      session[:user_id] = @user.id
      redirect_to rants_path
    else
      flash[:error] = "Login Failed.. Try again."
      redirect_to login_path
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to login_path
  end

  private
  def session_params
    params.permit(:username, :password)
  end

end
