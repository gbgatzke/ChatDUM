Rails.application.routes.draw do
  resources :bios
  resources :messages
  resources :chatrooms
  mount ActionCable.server => "/cable"
  resources :users
  
  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
 
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
