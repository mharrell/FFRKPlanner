'use strict';

angular.module('view1', ['ngRoute'])

    // .config(['$routeProvider', function($routeProvider) {
    //     $routeProvider.when('#/view1', {
    //         templateUrl: 'view1/view1.html',
    //         controller: 'View1Ctrl'
    //     });
    // }])

    .controller('View1Ctrl', ['gamedataService', function(gamedataService) {
        var self = this;

        self.data = gamedataService.name;

    }]);