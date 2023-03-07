Rails.application.routes.draw do
  resources :bios, only: [:show]
  resources :messages, only: [:show, :create]
  resources :chatrooms, only: [:index, :show]
  mount ActionCable.server => "/cable"
  resources :users, only: [:index, :show, :create, :destroy]
  
  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
  get '/chatroom/:id/messages', to: "chatrooms#show_messages"
  
 
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
