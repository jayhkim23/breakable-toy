Rails.application.routes.draw do
  root 'trainings#index'
  devise_for :users

  resources :trainings, only: [:index, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :trainings, only: [:index, :new, :create]
    end
  end
end
