Rails.application.routes.draw do
    root "home#index"
    get "/about" => "home#about"
    get "projects/janus" => "projects#janus"
    get "projects/treasury" => "projects#treasury"
    get "projects/opentable" => "projects#opentable"
    get "projects/pizza" => "projects#pizza"
    get "projects/ice" => "projects#ice"
    get "projects/fortunecookie" => "projects#fortunecookie"
    get "projects/luckycat" => "projects#luckycat"
    get "projects/disclosure" => "projects#disclosure"

end
