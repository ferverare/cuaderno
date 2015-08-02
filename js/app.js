var app = angular.module("myApp", []).controller("MainController", function($scope){

	$scope.alumnos = [

		{nombre:"Fernando Vera", telefono:"5522167518", curso:"Angularjs"},
		{nombre:"Juan Perez", telefono:"5522167518", curso:"Angularjs"},
		{nombre:"Abigail Ruiz", telefono:"5522167518", curso:"Angularjs"},
		{nombre:"Francisco Ruiz", telefono:"5522167518", curso:"Angularjs"}

];

 	$scope.Save=function(){

		$scope.alumnos.push({

			nombre:$scope.nuevoAlumno.nombre,
			telefono:$scope.nuevoAlumno.telefono,
			curso:$scope.nuevoAlumno.curso
		});
		$scope.formVisibility=false;
		console.log($scope.formVisibility)
	}

	$scope.formVisibility=false;

	$scope.ShowForm=function(){

		$scope.formVisibility=true;
		console.log($scope.formVisibility)
	}

});