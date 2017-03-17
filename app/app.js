/**
 * Created by mharrell on 3/17/17.
 */
var myApp = angular.module('myApp', ['ngRoute',
                                    'view1',
                                    'view2']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('#', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })


});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';

}]);
