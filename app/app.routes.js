app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "app/components/home/homeView.html",
            controller : "homeController"
        })
        .when("/login", {
            templateUrl : "app/components/login/loginView.html",
            controller : "loginController"
        });
    }
);