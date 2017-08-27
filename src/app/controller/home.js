angular.module('tic-tac-toe.home', [])
    .controller('homeController', function() {
        var vm = this
        vm.cell = {}
        vm.value = function(index) {
            vm.cell[index.toString()] = 'O'
        }
    })
