var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myNinjaApp.directive('randomNinja', [function() {
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        controller: function($scope) {
            $scope.$watch('ninjas', function() {
                $scope.random = Math.floor(Math.random() * $scope.ninjas.length);
            });
        }
    };
}]);

myNinjaApp.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {
    $scope.removeNinja = function (ninja) {
        console.log(ninja);
        $scope.ninjas.splice($scope.ninjas.indexOf(ninja), 1);

    };

    $scope.addNinja = function (ninja) {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true
        });

        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";

        console.log($scope.ninjas);
        console.log($scope.newNinja);

    };

    $http.get('data/ninjas.json').then(function (response) {
        console.log(response);
        $scope.ninjas = response.data;
    });

    console.log(angular.toJson($scope.ninjas));

}]);