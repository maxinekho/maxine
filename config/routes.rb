Rails.application.routes.draw do
    root "home#index"
    get "/resume" => "home#resume"
    get "projects/janus" => "projects#janus"
    get "projects/treasury" => "projects#treasury"
    get "projects/opentable" => "projects#opentable"
end
