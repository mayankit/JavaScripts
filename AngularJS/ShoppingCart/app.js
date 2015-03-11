var app = angular.module('shopping',[]);

app.controller('ShoppingCtrl',function($scope){

	$scope.items=[{
      name:  'Lux Soap',
      quantity: 10,
      price: 120

	},{
	  name: 'Panteene Shampoo',
      quantity: 2, 
      price: 230

	},{
	  name: 'Maggie',
      quantity: 30,
      price: 10


	}];

	$scope.itemsList =[{
		name:'Shoe Polish',
		price:40
	},{
		name:'Wine bottle',
		price:1000
	},{
		name:'Lucky coin',
		price:30
	},{
		name:'lunch box',
		price:450
	},{
		name:'Tamatoo sauce',
		price:100
	},{
		name:'Lux Soap',
		price:120
	},{
		name:'Panteene Shampoo',
		price:230
	},{
		name:'Maggie',
		price:10
	}];

   
   $scope.remove = function(index){

     $scope.items.splice(index,1);
   };

    $scope.addItem = function () {

        $scope.items.push({
            name: $scope.itemsInList.name,
            quantity: $scope.itemsInList.quantity,
            price: $scope.itemsInList.price
        });
        $scope.itemsInList = '';
        $scope.itemsInList.quantity = '';
        $scope.itemsInList.price = '';
    };

});

