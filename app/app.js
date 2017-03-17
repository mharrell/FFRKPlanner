/**
 * Created by mharrell on 3/17/17.
 */
var app = angular.module('app', [   'ngRoute',
                                    'view1',
                                    'view2']);

app.config( function ($routeProvider) {

    $routeProvider

        .when('#/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        });
        // .otherwise({ redirectTo: '/'});


});

app.controller('mainController', ['$scope', '$log', function($scope, $log) {
    var self = this;

    self.name = 'Main';

}]);
