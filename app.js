var app = angular.module("ngMacro", []);

app.controller('macroCtrl', function ($scope){

	$scope.user = {};
	$scope.goals = {
	    current: {
	        title:"Mainteance"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
	    }
	    ,loss: {
	        title:"Fat Loss"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
	    }
	    ,gain:{
	        title:"Muscle Gain"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
	    }
	};

	$scope.getMetaRate = function(){

		var meta; 
		if($scope.user.sex === "male"){
			meta = (88.362 + (13.397 * parseFloat(  $scope.user.weight) ) 
					+(5.799 * parseFloat(  $scope.user.height) )
					-(5.677 * parseFloat(  $scope.user.age) ) || 0 );  
		}else if($scope.user.sex === "female"){
			meta = (447.593 + (9.247 * parseFloat(  $scope.user.weight) )
					+(3.098 * parseFloat(  $scope.user.height) )
					-(4.33 * parseFloat(  $scope.user.age) ) || 0 );
		}
		else meta = null;

		$scope.user.bmr= meta;

		return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill Out the above Form";

		//return "HELLO";

	};
	
});