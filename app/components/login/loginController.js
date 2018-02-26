app.controller('loginController', ['$scope', function($scope) {
  $scope.validate = function() {
        console.log($scope.login);
        console.log($scope.password);
        if(!$scope.login){
        	$scope.message = "Merci de rentrer un nom d'utilisateur."
        	return;
        }

        if (!$scope.password){
        	$scope.message = "Merci de rentrer un mot de passe."
        	return;
        }
        	

    };
}]);
