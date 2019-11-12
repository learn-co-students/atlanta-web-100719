Rails.application.routes.draw do
  resources :rants
  resources :users

  get '/login', to: 'session#new'
  post '/login', to: 'session#create'

  get '/logout', to: 'session#destroy'

end
