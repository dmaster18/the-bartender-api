Rails.application.routes.draw do
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
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
