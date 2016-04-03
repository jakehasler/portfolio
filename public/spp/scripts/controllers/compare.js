'use strict';

/**
 * @ngdoc function
 * @name sppApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the sppApp
 */
angular.module('sppApp')
  .controller('CompareCtrl', function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var v1 = $routeParams.v1;
    var v2 = $routeParams.v2;
    $scope.book = $routeParams.book;
    $scope.chapter = $routeParams.chapter;
    $scope.verse = $routeParams.verse;

    $scope.versionsObj = [
      {
        option: 'English: King James Version',
        value: 'kjv'
      },
      {
        option: 'English: KJV Easy Read',
        value: 'akjv'
      },
      {
        option: 'English: American Standard Version',
        value: 'asv'
      },
      {
        option: 'English: Amplified Version',
        value: 'amp'
      },
      {
        option: 'English: Basic English Bible',
        value: 'basicenglish'
      },
      {
        option: 'English: New American Standard',
        value: 'nasb'
      },
      {
        option: 'English: World English Bible',
        value: 'web'
      },
      {
        option: 'English: Webster\'s Bible',
        value: 'wb'
      },
      {
        option: 'Spanish: Reina Valera',
        value: 'valera'
      },
      {
        option: 'Portuguese: Almeida Atualizada',
        value: 'almeida'
      }
    ];

    $scope.versionsObj.forEach(function(version) {
        if(v1 == version.value) {
            $scope.v1 = version.option;
        }
        else if(v2 == version.value) {
            $scope.v2 = version.option;
        }
    });


    var url = 'http://getbible.net/json?callback=JSON_CALLBACK&passage=' + $scope.book + $scope.chapter + ':' + $scope.verse;
    console.log(url);

    $http.jsonp(url + '&v=' + v1).success(function(res) {
    	$scope.ver1 = res.book[0].chapter[$scope.verse].verse;
      $scope.ready = true;
    });

    $http.jsonp(url + '&v=' + v2).success(function(res) {
    	$scope.ver2 = res.book[0].chapter[$scope.verse].verse;
    });

    $scope.ready = false;

  });
