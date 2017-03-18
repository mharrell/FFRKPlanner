'use strict';

angular.module('view1', ['ngRoute', 'gamedata']) //you need to this module that you'll be using your "gamedata" module

// if you aren't using $scope in your controller you need to reference it via the "controllerAs" variable
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {//you don't need to reference the # in the route, ngRoute already assumes that anything after the # is client side only
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'view1' // so in your html you'd reference it as view1.nameOfVariable
        });
    }])

    .controller('View1Ctrl', ['gamedataService', function(gamedataService) {
        var self = this;
        self.data = gamedataService.name;

        gamedataService.sb();

    }]);
