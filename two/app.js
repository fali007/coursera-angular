(function(){
    'use strict';
    angular.module('name_calc',[])
    .controller('name_calc_controller',function($scope){
        $scope.name='asad';
        $scope.value=0;
        $scope.displayNumeric=function(){
            var val=calc_Num_string($scope.name);
            $scope.value=val;
        };
        function calc_Num_string(string){
            var val=0;
            for(var i=0;i<string.length;i++){
                val+=string.charCodeAt(i);
            }
            return val;
        }
    });
})();