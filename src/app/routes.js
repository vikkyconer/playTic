'use strict'
angular.module('tic-tac-toe.routes', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/home.html',
            controller: 'homeController',
            controllerAs: 'ctrl'
        })
        .otherwise({
            redirectTo: '/'
        })
})
