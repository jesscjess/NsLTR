'use strict';

angular.module('myApp.builder.nsltrTemplate-directive', [])

.directive('nsltrTemplate', ['version', function(version) {
  return {
        // scope: {
        //   templateUrl: '&'
        // },
        restrict : "A",
        link: function(scope, element, attrs) {
           scope.getContentUrl = function() {
                return attrs.templateUrl;
           }
       },
       template: '<div ng-include="getContentUrl()"></div>'
        // templateUrl: function(element, attrs) {
        //    return attrs.templateUrl || 'someDefaultFallback.html';
        // }
        // templateUrl: function(scope) {
        //   console.log(scope.templateUrl);
        //     return scope.templateUrl;
        // }
  };
}]);