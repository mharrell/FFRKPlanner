/**
 * Created by MIKEANDAUB on 3/15/2017.
 */
angular.module('gamedata', [/*'$http'*/]) //you were injecting $http here.. this is for telling angular which modules you are using
    .service('gamedataService', ['$http', function($http){ // but you really need it here

    var self = this;

    self.name = "Dat game data.";

    self.sb = function() {
        $http({
            method: 'GET',
            url: 'https://sheetsu.com/apis/v1.0/47de2e69e299/sheets/JSON%20-%20SBs'
        }).then(function successCallback(response) {
            console.log('response', response);
            // self.sb = response.data;  //this effectively overwrites this function with the response you get back from the server probably not what you wanted
        }, function errorCallback(response) {
          console.error('error', response)
            // self.sb = response.statusText; //same here
        });

    };


}]);
