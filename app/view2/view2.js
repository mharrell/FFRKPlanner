'use strict';

angular.module('view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', { //you don't need to reference the # in the route, ngRoute already assumes that anything after the # is client side only
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs : 'view2'
      });
    }])

    .controller('View2Ctrl', [function() {
        var self = this;
        self.message = 'angular is fun';

        self.today = new Date();
    }]);
