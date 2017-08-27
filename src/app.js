angular.module('tic-tac-toe.home', [])
    .controller('homeController', function() {
        var vm = this
        var discount = 0.3
        var actions = TicTacToe.actions
        var Q = {}
        var move = 0
        var gen = 0
        vm.value = function(index) {
            console.log(index);
        }

        const maxQ = function(s) {
            var val = None
            var act = None
            if (var s not in Q):
                var temp = {}
            for action in actions:
                temp[action] = 0.1
            Q[s] = temp
            for a, q in Q[s].items():
                if val is None or(q > val):
                val = q
            act = a
            return act, val
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
