(function(){
    var app = angular.module('myApp');

    app.controller('Controller', function($scope, $http, $interval, $log, $anchorScroll, $location, github ){
   
    var onUserComplete = function(data){
    $scope.user = data;
    github.getRepos($scope.user)
        .then(onRepos, onError);
   };

   var onRepos = function(data){
       $scope.repos = data;
       $location.hash("userDetails");
       $anchorScroll();
   }

   var onError = function(reason){
       $scope.error = "Could not find the user";
   }

   var decrementCountdown = function(){
       $scope.countdown -=1;
       if($scope.countdown < 1){
           $scope.search($scope.username);
       }
   }
   var countdownInterval = null;

   var startCountdown = function(){
       countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
   };
   $scope.search = function(username){
       $log.info("Searching for " + username);
    github.getUser(username).then(onUserComplete, onError);
   if(countdownInterval)
        $interval.cancel(countdownInterval);
    };

   $scope.username = "angular";
   $scope.countdown = 5;
   startCountdown();
});
}());