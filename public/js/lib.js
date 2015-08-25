/**
* TodoApp Module
*
* Description
*/
var app = angular.module('TodoApp', []);

app.controller('todoController', ['$scope', function ($scope) {
    $scope.todos = ['a', 'b'];
    console.log($scope.todos);
}]);
