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


  }).controller('GameCtrl', function($scope,$location,words,score) {

  }).controller('HighscoreCtrl', function($scope, highscore) {  


});