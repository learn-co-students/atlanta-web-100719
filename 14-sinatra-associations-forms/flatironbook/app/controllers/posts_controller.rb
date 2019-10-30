class PostsController < ApplicationController

  #  index, show, new, create, edit, update, delete

  # GET: /posts
  get "/posts" do
    # what do i need from my model?
    @posts = Post.all
    erb :"/posts/index.html"
  end

  # GET: /posts/new
  get "/posts/new" do
    @users = User.all
    erb :"/posts/new.html"
  end

  # POST: /posts
  post "/posts/create" do
    @post = Post.create(params[:post])
    redirect "/posts"
  end



  # GET: /posts/5
  get "/posts/:id" do
    @post = Post.find_by(:id => params[:id])
    erb :"/posts/show.html"
  end

  # GET: /posts/5/edit
  get "/posts/:id/edit" do
    @post = Post.find_by(:id => params[:id])
    @users = User.all
    erb :"/posts/edit.html"
  end

  # PATCH: /posts/5
  patch "/posts/:id" do
    @post = Post.find_by(:id => params[:id])
    @post.update(params[:post])
    redirect "/posts/#{@post.id}"
  end

  # DELETE: /posts/5/delete
  delete "/posts/:id/delete" do
    redirect "/posts"
  end
end
