Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :bios, only: [:show]
  resources :messages, only: [:show, :create, :destroy, :update]
  resources :chatrooms
  resources :users

  get '/userprofile/:id', to: 'users#profile'

  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
  get '/chatroom/:id/messages', to: "chatrooms#show_messages"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
