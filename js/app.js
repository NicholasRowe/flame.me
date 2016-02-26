'use strict';

angular.module('myApp', [])
.controller('startScreen', function($scope, $http){

  
    // get list of available regions
    $scope.regions = {
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

    $scope.apiKey = "c7e84542-6264-4b87-b0a8-30bd8055dd83"
    $scope.searchSummoner = "Test";

    // http://stackoverflow.com/questions/18421830/how-to-wait-till-the-response-comes-from-the-http-request-in-angularjs

    var getData = function() {

        // Angular $http() and then() both return promises themselves 
        return $http.get("https://euw.api.pvp.net/api/lol/" + $scope.regions.selectedOption.name + "/v1.4/summoner/by-name/" + $scope.searchSummoner + "?api_key=" + $scope.apiKey).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            return result.data;
        });
    };

    return { getData: getData };

    

function myFunction($scope, myService) {
    var myDataPromise = myService.getData();
    myDataPromise.then(function(result) {  

       // this is only run after getData() resolves
       $scope.data = result;
       console.log("data.name"+$scope.data.name);
    });
}


    function getSummoner(){

        $http.get("https://euw.api.pvp.net/api/lol/" + $scope.regions.selectedOption.name + "/v1.4/summoner/by-name/" + $scope.searchSummoner + "?api_key=" + $scope.apiKey)
        .then(function(response){ 
            $scope.object = response.data; 
            console.log(  $scope.object);

        });

    }

    function getLeague() {

        $http.get("https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/65218394?api_key" + $scope.apiKey)
        .then(function(response){
            $scope.object = response.data;
            // console.log(  $scope.object);
        });

    }



});
