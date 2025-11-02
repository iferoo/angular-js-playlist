var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {
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

    $scope.ninjas = [{
        name: 'Yoshi',
        age: 25,
        belt: 'green',
        rate: 50,
        available: true,
        thumb: "content/imgs/yoshi.webp"
    }, {
        name: 'Crystal',
        age: 30,
        belt: 'pink',
        rate: 30,
        available: true,
        thumb: "content/imgs/crystal.webp"

    }, {
        name: 'Ryu',
        age: 35,
        belt: 'orange',
        rate: 10,
        available: false,
        thumb: "content/imgs/ryu.webp"

    }, {
        name: 'Shaun',
        age: 28,
        belt: 'black',
        rate: 100,
        available: true,
        thumb: "content/imgs/shaun.jpg"

    }];
}]);