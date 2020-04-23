(function(){
    var app = angular.module("myApp",["ngRoute"]);
    app.config(function($routeProvider, $locationProvider){
        
        $routeProvider
        .when("/", {
            templateUrl: "../HTML/main.html"
        })
        .when("/aboutme",{
            templateUrl: "../HTML/aboutme.html"
        })
        .when("/contact",{
            templateUrl: "../HTML/contact.html"
        })
        .when("/post", {
            templateUrl: "../HTML/post.html"
        })
        .when("/notfound",{
            templateUrl: "../HTML/notfound.html"
        })
        .otherwise({redirectTo:"/notfound"});
    });
    $locationProvider.html5Mode(true);
}());