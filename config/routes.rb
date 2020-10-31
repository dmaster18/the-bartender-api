Rails.application.routes.draw do
  resources :recipe_garnishes
  resources :recipe_mixers
  resources :recipe_liqueurs
  resources :recipe_liquors
  resources :user_recipes
  resources :garnishes
  resources :mixers
  resources :liqueurs
  resources :liquors
  resources :bars
  resources :liquor_stores
  resources :stores
  resources :questions
  resources :quizzes
  resources :reviews
  resources :recipe_ingredients
  resources :ingedients
  resources :recipes
  resources :users

  get '/patients/:id', to: 'patients#show'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
