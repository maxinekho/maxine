Rails.application.routes.draw do
    root "home#index"
    get "/about" => "home#about"
    get "projects/janus" => "projects#janus"
    get "projects/treasury" => "projects#treasury"
    get "projects/opentable" => "projects#opentable"
end
