Rails.application.routes.draw do
  resources :rants
  resources :users

  get '/login', to: 'auth#login'
  post '/login', to: 'auth#create_login', as: 'login_post'

  get '/logout', to: 'auth#logout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
