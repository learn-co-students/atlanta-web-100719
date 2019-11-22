class Api::V1::ZooController < ApplicationController
  def index 
    @zoos = Zoo.all 
    render json: @zoos 
  end
end
