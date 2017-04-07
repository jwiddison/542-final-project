Rails.application.routes.draw do
  resources :events
  get 'calendar/index'

  devise_for :users
  get 'home/index'

  root 'home#index'
end
