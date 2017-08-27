angular.module('tic-tac-toe.home', [])
    .controller('homeController', function() {
        var vm = this
        vm.cell = {}
        var Q = {}
        var board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
        var actions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        var state = board


        const maxQ = function(state) {
            var val = null
            var act = null
            if (!(state in Q)) {
                var temp = {}
                for (action in actions) {
                    temp[action] = 0.1
                }
                Q[state] = temp
            }
            for (var prop in Q[state]) {
                if (val == null || Q[state][prop] > val) {
                    val = Q[state][prop]
                    act = prop
                }
            }
            return {
                act,
                val
            }
        }

        console.log(maxQ(state))
        vm.value = function(index) {
            vm.cell[index] = 'O'
        }
    })
