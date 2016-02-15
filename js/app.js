'use strict';

angular.module('myApp', [])
  .controller('startScreen', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();

    });

    $scope.$watch('searchSummoner', function() {
      getSummoner();
      
    });


    function fetch(){

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }

    $scope.apiKey = "c7e84542-6264-4b87-b0a8-30bd8055dd83"
    $scope.searchSummoner = "Test";

    function getSummoner(){

      $http.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + $scope.searchSummoner + "?api_key=" + $scope.apiKey)
      .then(function(response){ 
        $scope.object = response.data; 
        console.log(  $scope.object);

      });

    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    // $scope.select = function(){
    //   this.setSelectionRange(0, this.value.length);
    // }
    
  });
