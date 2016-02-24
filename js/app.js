'use strict';

angular.module('myApp', [])
.controller('startScreen', function($scope, $http){

    $scope.$watch('search', function() {
        fetch();

    });

    // get list of available regions
    $scope.regions = {
        repeatSelect: null,
        availableRegions: [
        {id: 'server_euw', name: 'EUW'},
        {id: 'server_eune', name: 'EUNE'},
        {id: 'server_na', name: 'NA'},
        {id: 'server_oce', name: 'OCE'},
        {id: 'server_br', name: 'BR'}
        ],
        selectedOption: {id: 'server_euw', name: 'EUW'}, //This sets the default value of the select in the ui
    };



$scope.$watch('searchSummoner', function() {
    getSummoner();

});



function fetch(){

    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
    .then(function(response){ $scope.related = response.data; });
}

$scope.apiKey = "c7e84542-6264-4b87-b0a8-30bd8055dd83"
$scope.searchSummoner = "";

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




});
