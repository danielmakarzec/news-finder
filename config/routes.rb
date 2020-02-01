Rails.application.routes.draw do
  root to: 'articles#home'
  get '/favourite', to: 'articles#home'
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show, :create, :destroy]
    end
  end
end
