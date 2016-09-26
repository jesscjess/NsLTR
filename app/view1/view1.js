'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
	
	$scope.itemsList = {
        items1: [],
        items2: []
    };
	
	for (var i = 0; i <= 5; i += 1) {
        $scope.itemsList.items1.push({'Id': i, 'Label': 'Item A_' + i});
    }
//
//    for (i = 0; i <= 5; i += 1) {
//        $scope.itemsList.items2.push({'Id': i, 'Label': 'Item B_' + i});
//    }

	$scope.sortableOptions = {
        containment: '#sortable-container',
        allowDuplicates: true
    };
    $scope.sortableCloneOptions = {
        containment: '#sortable-container',
        clone: true
    };
	
}]);