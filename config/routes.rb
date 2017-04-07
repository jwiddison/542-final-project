Rails.application.routes.draw do
  get 'calendar/index'

  devise_for :users
  get 'home/index'

  root 'home#index'
end
