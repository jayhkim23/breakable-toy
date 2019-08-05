class TrainingsController < ApplicationController
  def index
    @trainings = Training.all
    # @trainings = Training.order("date DESC")
  end

  def show
    @trainings = Training.find(params[:id])
  end

  def destroy
    @trainings = Training.find(params[:id])
    @trainings.destroy
    head :no_content, status: ok
  end
end
