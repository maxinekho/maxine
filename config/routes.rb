Rails.application.routes.draw do
    root "home#index"
    get "/about" => "home#about"
    get "projects/facebook" => "projects#facebook"
    get "projects/janus" => "projects#janus"
    get "projects/treasury" => "projects#treasury"
    get "projects/dish" => "projects#dish"
    get "projects/luckycat" => "projects#luckycat"
    get "projects/disclosure" => "projects#disclosure"
end
