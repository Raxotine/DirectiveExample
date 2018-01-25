	app.directive('test', function(){
		return {
		restrict: 'E',
		template: "<p>{{addion}}</p>"
		}
	});

	app.directive('othertest', function(){
		return {
		restrict: 'E',
		template: "<p>{{second}}</p>"
		}
	});

	app.directive('thelist', function(){
		return {
		restrict: 'E',
		template: "<div ng-repeat='x in lista'><a ng-model='linkas' href='{{linkas[$index]}}'>{{lista[$index]}}</a></div>"
		}
	});