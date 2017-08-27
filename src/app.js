angular.module('tic-tac-toe.home', [])
    .controller('homeController', function() {
        var vm = this
        vm.cell = {}
        vm.value = function(index) {
            vm.cell[index.toString()] = 'O'
        }
    })

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
