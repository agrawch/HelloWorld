var demoApp = angular.module("demoApp",[])
.factory('simpleFactory', ['$http', function($http) {

    var urlBasechandan = 'http://localhost:8080/AngularJSTest/FirstAngularJS.html';
    var dataFactory = {};

    dataFactory.getTodos = function () {
        return $http.get(urlBasechandan);
    };


    return dataFactory;
}])
/*.factory('simpleFactory',['$http',function($http){
		
		var todos = [{name:'AngularJS',done:false},{name:'NodeJS',done:false}];
		var factory ={};
		factory.getTodos = function () {
			return todos;
		};
		return factory;
		
	var urlBase = '/api/customers';
    var dataFactory = {};

    dataFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    return dataFactory;
	]
};
)
	
*/
.controller('TODOCon',function ($scope,simpleFactory) {
		$scope.todos=[];
		$scope.status;
		init();
		function init() {
			 simpleFactory.getTodos().success(function (custs) {
	                $scope.todos = custs;
	            })
	            .error(function (error) {
	                $scope.status = 'Unable to load customer data: ' + error.message;
	            });;
		}
		$scope.addTodo = function() {
			$scope.todos.push({name:$scope.newTask,done:false});
		};
	
	});

	
	
