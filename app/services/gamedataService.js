/**
 * Created by MIKEANDAUB on 3/15/2017.
 */
angular.module('gamedata', ['$http'])
    .service('gamedataService', [ function(){

    var self = this;

    self.name = "Dat game data.";



    // self.sb = function() {
    //     $http({
    //         method: 'GET',
    //         url: 'https://sheetsu.com/apis/v1.0/47de2e69e299/sheets/JSON%20-%20SBs'
    //     }).then(function successCallback(response) {
    //         self.sb = response.data;
    //     }, function errorCallback(response) {
    //         self.sb = response.statusText;
    //     });
    //
    // };


}]);