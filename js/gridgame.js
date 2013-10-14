angular.module('GameApp', []).
controller('GameCtrl', function ($scope){
    
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
});
