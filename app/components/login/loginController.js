app.controller('loginController', ['$scope', function($scope) {
  $scope.validate = function() {
        console.log($scope.login);
        console.log($scope.password);
    };
}]);