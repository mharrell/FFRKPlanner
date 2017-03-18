/**
 * Created by mharrell on 3/17/17.
 */
var app = angular.module('app', [   'ngRoute',
                                    'view1',
                                    'view2']);

app.config( function ($routeProvider) {

// This was causing some funky recursion when "index.html" was loaded into ng-view, use a different template if you want to load it in rather than reusing your base template
    // $routeProvider
    //     .when('', {
    //         templateUrl: 'index.html',
    //         controller: 'mainController'
    //     });
    //     // .otherwise({ redirectTo: '/'});


});


// variables are not tied to $scope so you need to reference them using the "controller as controllerName" syntax, see index.html
app.controller('mainController', [function() {
    var self = this;
    self.name = 'Main';

}]);
