class ApplicationController < ActionController::API

  def current_user
    token = request.headers['Access-Token']
    author_id = JWT.decode(token, ENV['SECRET'])[0]["author_id"]
    current = Author.find_by(id: author_id)
  end

  def authenticate!
    unless current_user
      return nil
    end
  end
end
