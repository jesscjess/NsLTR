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
        items1: ['components/nsltrTemplate/templates/1-header.html',
                 'components/nsltrTemplate/templates/2-confirmation.html',
                 'components/nsltrTemplate/templates/3-message-title.html',
                 'components/nsltrTemplate/templates/divider.html',
                 'components/nsltrTemplate/templates/4-left-right.html',
                 'components/nsltrTemplate/templates/5-message-title_w_img.html',
                 'components/nsltrTemplate/templates/6-left-right_w_top-title.html',
                 'components/nsltrTemplate/templates/7-left-right_w_bottom-title.html',
                 'components/nsltrTemplate/templates/8-right_w_img.html',
                 'components/nsltrTemplate/templates/9-left_w_img.html',
                 'components/nsltrTemplate/templates/10-right_w_small-img.html',
                 'components/nsltrTemplate/templates/11-right_w_small-img-wrap.html',
                 'components/nsltrTemplate/templates/12-left-right-block-colour.html',
                 'components/nsltrTemplate/templates/13-empty.html'],
        items2: ['components/nsltrTemplate/templates/1-header.html']
    };

    console.log($scope.itemsList.items2);
	
	// for (var i = 0; i <= 5; i += 1) {
    //     $scope.itemsList.items1.push({'Id': i, 'Label': 'Item A_' + i});
    // }

//    for (var i = 0; i <= 5; i += 1) {
//        $scope.itemsList.items2.push({'Id': i, 'Label': 'Item B_' + i});
//    }

   $scope.url = 'components/nsltrTemplate/templates/header.html';

	$scope.sortableOptions = {
        containment: '#sortable-container',
        allowDuplicates: true
    };
    $scope.sortableCloneOptions = {
        containment: '#sortable-container',
        clone: true
    };
	
}]);