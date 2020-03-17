Rails.application.routes.draw do
  namespace :api do
    resources :users, only: :index
  end

  get '/(*all)', to: 'home#index'

  root 'home#index'
end
