Rails.application.routes.draw do
  root 'trainings#index'
  devise_for :users

  devise_scope :user do
    get "users/sign_out" => "devise/sessions#destroy"
  end

  resources :trainings, only: [:index, :show, :new, :create]
  resources :users, only: [:index, :destroy]

  namespace :api do
    namespace :v1 do
      resources :trainings, only: [:index, :show, :new, :create]
      resources :messages, only: [:create]
      resources :users, only: [:show]
      get "users/current" => "users#current_user"
      post 'trainings/search', to: 'trainings#search'
    end
  end
end
