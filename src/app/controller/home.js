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

          var alpha = 1
          var t = 1
          print 'Generation: ', gen
          // while True:
              s = tuple(TicTacToe.board)
              max_act, max_val = maxQ(s)
              (s1, a, r, s2, isLost, isWon, isDraw) = do_action(max_act)

              max_act, max_val = maxQ(s2)
              inc_Q(tuple(s), a, alpha, r + discount * max_val)
              if (isLost or isWon or isDraw):
                  gen += 1
                  
                  TicTacToe.reset_game('The Winner is 0')
                  print 'Generation: ', gen
                  move = 0
                  t = 1.0
                  move = 0
                  time.sleep(0.01)

              t += 1.0

              # Update the learning rate
              alpha = pow(t, -0.1)

              # MODIFY THIS SLEEP IF THE GAME IS GOING TOO FAST.
              time.sleep(0.1)

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
