Rails.application.routes.draw do
  root 'trainings#index'
  devise_for :users

  resources :trainings, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :trainings, only: [:index, :show, :new, :create]
      post 'trainings/search', to: 'trainings#search'
    end
  end
end
