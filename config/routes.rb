Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  resources :bios
  resources :messages
  resources :chatrooms
  resources :users

  get '/users/:id', to: 'users#profile'

  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
