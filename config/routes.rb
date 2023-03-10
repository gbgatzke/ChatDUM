Rails.application.routes.draw do
  # mount ActionCable.server => '/cable'
  resources :bios, only: [:show]
  resources :messages, only: [:create, :show, :update, :destroy, :index]
  resources :chatrooms
  resources :users
  get '/chatroom/:id/messages', to: "chatrooms#show_messages"
  get '/userprofile/:id', to: 'users#profile'

  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
  post '/chatroom/new', to: "chatrooms#new_chatroom"
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
