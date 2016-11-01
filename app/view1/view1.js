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
        items1: [{url:'components/nsltrTemplate/templates/1-header.html', list:1},
                 {url:'components/nsltrTemplate/templates/2-confirmation.html', list:1},
                 {url:'components/nsltrTemplate/templates/3-message-title.html', list:1},
                 {url:'components/nsltrTemplate/templates/divider.html', list:1},
                 {url:'components/nsltrTemplate/templates/4-left-right.html', list:1},
                 {url:'components/nsltrTemplate/templates/5-message-title_w_img.html', list:1},
                 {url:'components/nsltrTemplate/templates/6-left-right_w_top-title.html', list:1},
                 {url:'components/nsltrTemplate/templates/7-left-right_w_bottom-title.html', list:1},
                 {url:'components/nsltrTemplate/templates/8-right_w_img.html', list:1},
                 {url:'components/nsltrTemplate/templates/9-left_w_img.html',list:1},
                 {url:'components/nsltrTemplate/templates/10-right_w_small-img.html', list:1},
                 {url:'components/nsltrTemplate/templates/11-right_w_small-img-wrap.html', list:1},
                 {url:'components/nsltrTemplate/templates/12-left-right-block-colour.html', list:1},
                 {url:'components/nsltrTemplate/templates/13-empty.html', list:1}], 
        items2: [{url:'components/nsltrTemplate/templates/1-header.html', list:2}]
    };


	$scope.sortableComponentOptions = {
        containment: '#sortable-container',
        clone: true,
        // ctrlClone: true
    };
    $scope.myNsLTROptions = {
        containment: '#sortable-container',
        allowDuplicates: true,
        ctrlClone: true
    };
	
}]);