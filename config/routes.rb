Rails.application.routes.draw do
  root 'trainings#index'
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :trainings, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :trainings, only: [:index]
    end
  end
end
