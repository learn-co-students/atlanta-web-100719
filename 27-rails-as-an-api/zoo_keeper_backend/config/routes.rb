Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # /api/v1/model_name
  namespace :api do 
    namespace :v1 do 
      resources :zoo 
      resources :animals 
    end
  end
end
