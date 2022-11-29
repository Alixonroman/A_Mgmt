Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :apartment_photos
  resources :apartments
  post '/login', to: 'users#login'
  get '/me', to: 'users#me'
  post '/signup', to: 'users#create'
  get '/reviews', to: 'reviews#index'
  post '/reviews', to: 'reviews#create'
  delete '/reviews/:id', to: 'reviews#destroy'
  patch '/reviews/:id', to: 'reviews#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
