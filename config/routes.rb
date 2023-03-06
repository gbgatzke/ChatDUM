Rails.application.routes.draw do
  resources :users
  
  get '/me', to: 'users#show'
  post "/signup", to: "users#create"
 
end
