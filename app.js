var app = angular.module('myapp',['ngRoute'])
                 .config(function($routeProvider,$locationProvider){
                   $routeProvider.when('/',{
                      templateUrl:'./main.html',
                      controller: 'main'
                   })
                   .when('/module/:module_name',{
                      templateUrl:'./detail.html',
                      controller:'module'
                   })
                   .otherwise({
                     redirectTo:'/'
                   });
                $locationProvider.hashPrefix('!');
                 });

   app.controller('main',function($scope){


   });

   app.controller('module',function($scope,$routeParams){
       $scope.name = $routeParams.module_name;
     });
