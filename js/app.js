var routerApp = angular.module("routerApp",["ui-router"]);
router.config(function($stateprovider,$urlrouterprovider)
{
	$stateprovider
	.state("home", { 
		Url : "/home", 
		templateUrl : "templates/home.html",
		controller : "homecontroller",
	})
.state("employee",{
	Url : "/employee",
	templateUrl : "templates/employee.html",
	controller : "employeecontroller",
})
.state("technology",{
	Url : "/technology",
	templateUrl : "templates/technology.html",
	controller : "technologycontroller",
})
routerApp.controller('myCtrl',function($scope)
{
	$scope.emplist = [{employeename : "sam", designation : "Developer", technology = "java"},
	                 {employeename : "sreeja", designation : "Web anlayst", technology = ".net"},
	                 {employeename : "saadvika", designation : "QA analyst", technology = "selenium"},
]});
});