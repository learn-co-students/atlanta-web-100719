class RantsController < ApplicationController

  before_action :find_rant, only: [:show, :edit, :destroy]

  def index
    @rants = Rant.all
  end

  def new
    @rant = Rant.new
    @users = User.all
  end

  def create
    @rant = Rant.create(rant_params)
    redirect_to rants_path
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @rant.destroy
  end

  private
  def find_rant
    @rant = Rant.find_by(:id => params[:id])
  end

  def rant_params
    params.require(:rant).permit(:content, :user_id)
  end

end
