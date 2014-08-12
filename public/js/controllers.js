'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function(data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).controller('HomeCtrl', function($scope) {
    // write Ctrl here

  }).controller('ScoreCtrl', function($scope,$http,score) {
    
    $scope.score = score.now;
    $scope.submitted = false;
    $scope.score === 3 ? $scope.won = true : $scope.won = false;
    $scope.clearScore = function(){
      score.now = 0;
    }
    $scope.addScore = function(){
      $http.post('/api/highscore',{name: $scope.player, score: $scope.score})
      $scope.submitted = true;
    }

  }).controller('GameCtrl', function($scope,$location,words,score) {

    $scope.words = words;

    $scope.getWords = function(){
      $scope.threeWords = _.sample($scope.words,3);
      $scope.guessWord = _.sample($scope.threeWords);
    }
    score.now = 0;
    $scope.getWords();

    $scope.guess = function(word){
      if($scope.guessWord === word){
        score.now += 1;
        score.now === 3 ? $location.path('/score') : $scope.getWords();
      } else {
        $location.path('/score');
      }

    }

    $scope.$on('timer-stopped', function (event, data){
        $location.path('/score');
        $scope.$apply();
    });

  }).controller('HighscoreCtrl', function($scope, highscore) {  


});