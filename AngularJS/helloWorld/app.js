var app = angular.module('learning',[]);

app.controller('HelloWorldCtrl',function($scope){

	$scope.message = {text:'World'};


});


app.controller('HelloCtrl',function($scope){

	$scope.message = {text:'Mayank'};


});