class RantsController < ApplicationController

  before_action :find_rant, only: [:show, :edit, :update, :destroy]

  def index
    @rants = Rant.all
  end

  def new
    @rant = Rant.new
    @users = User.all
  end

  def create
    @rant = Rant.new(rant_params)

    if @rant.valid?
      @rant.save
      redirect_to rants_path
    else
      flash[:error] = "This didn't work fam. try again..."
      byebug
      redirect_to new_rant_path
    end
  end

  def show
  end

  def edit
  end

  def update
    @rant.update(rant_params)
    redirect_to rant_path(@rant)
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
