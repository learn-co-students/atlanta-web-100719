class ApplicationController < ActionController::Base

  def authenticate
    if session[:user_id].nil?
      return false
    else
      return true
    end
  end

end
