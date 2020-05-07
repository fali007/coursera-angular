(function(){
    'use strict';
    angular.module('myfirstapp',[])
    .controller('myfirstcontroller',function($scope){
        $scope.name="Felix George";
        $scope.sayHello=function(){
            return "Hello ";
        };
    });
})();