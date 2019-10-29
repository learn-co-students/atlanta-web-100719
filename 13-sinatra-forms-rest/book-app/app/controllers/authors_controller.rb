class AuthorsController < ApplicationController

  # GET: /authors
  get "/authors" do
    @authors = Author.all
    erb :"/authors/index.html"
  end

  # GET: /authors/new
  get "/authors/new" do
    erb :"/authors/new.html"
  end

  # POST: /authors
  post "/authors" do
    @author = Author.create(
      name: params[:name]
    )
    redirect "/authors"
  end

  # GET: /authors/5
  get "/authors/:id" do
    @author = Author.find_by(id: params[:id])
    erb :"/authors/show.html"
  end

  # GET: /authors/5/edit
  get "/authors/:id/edit" do
    @author = Author.find_by(id: params[:id])
    erb :"/authors/edit.html"
  end

  # PATCH: /authors/5
  patch "/authors/:id" do
    @author = Author.find_by(id: params[:id])
    @author.update(name: params[:name])
    redirect "/authors/#{@author.id}"
  end

  # DELETE: /authors/5/delete
  delete "/authors/:id/delete" do
    @author = Author.find_by(id: params[:id])
    @author.destroy
    redirect "/authors"
  end
end
