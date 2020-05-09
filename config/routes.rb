Rails.application.routes.draw do
  namespace :api do
    # resources :users, only: :index do
    #   get :autocomplete, on: :collection
    # end

    resources :search, only: :index do
      get :autocomplete, on: :collection
    end
  end

  get '/(*all)', to: 'home#index'

  root 'home#index'
end
