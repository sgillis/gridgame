angular.module('GameApp', []).
    controller('GameCtrl', function ($scope){
        $scope.max_range = 3;
        $scope.range = [0, 1, 2, 3];
        $scope.players = [
            [0, 0], 
            [3, 3]
        ];

        $scope.updatePlayerLocation = function(x, y){
            $scope.players[0][0] = x;
            $scope.players[0][1] = y;
        };

        $scope.containsPlayer = function(player_num, x, y){
            return $scope.players[player_num][0] == x && $scope.players[player_num][1] == y;
        };

        $scope.movePlayer = function($event){
            if($event.keyCode == 119){
                // w
                if($scope.players[0][1] > 0){
                    $scope.players[0][1] -= 1
                }
            } else if($event.keyCode == 97){
                // a
                if($scope.players[0][0] > 0){
                    $scope.players[0][0] -= 1
                }
            } else if($event.keyCode == 115){
                // s
                if($scope.players[0][1] < $scope.max_range){
                    $scope.players[0][1] += 1
                }
            } else if($event.keyCode == 100){
                // d
                if($scope.players[0][0] < $scope.max_range){
                    $scope.players[0][0] += 1
                }
            }
        };
    });
