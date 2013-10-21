'use strict';

var gridGameApp = angular.module('gridGameApp', []);

gridGameApp.factory('game', function(){
    return new Game();
});

gridGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
    $scope.game = game;
});
