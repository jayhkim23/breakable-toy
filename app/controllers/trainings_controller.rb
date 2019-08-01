class TrainingsController < ApplicationController
  def index
    @trainings = Training.all
  end

  def show
    @trainings = Training.find(params[:id])
  end
  
end
