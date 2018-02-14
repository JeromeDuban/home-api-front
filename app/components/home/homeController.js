app.controller('homeController', function($scope,$http,$interval) {
				
	// Heure
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    //Récupération des appareils
	$http.get('assets/raw/devices.json').then(function(response) {
	   $scope.devices = response.data.devices;
	   getStatus($scope, $http, $interval);
	});

});


function getStatus($scope, $http, $interval){

	var status = function (){
		angular.forEach($scope.devices, function(value, key) {

			var url = "http://localhost:8080/api/status/"+value.ip;
			console.log(url);
			$http.get(url, config).then(
				function(response) {
					if (response.data.success){
						value.status = response.data.status;
					}
					console.log(value);
				},
				function(data) {
			      console.log(data);
			    }
			);
		});
	}

	status();
	$interval(status, 5*1000);
};