angular.module('myApp',
['ui.router',
'salePage',
'marketPage',
'cartPage',
'minePage'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		controller: 'ctrl',
		$urlRouterProvider.otherwise('/sale')
			
	})
	.controller('ctrl', function ($scope) {
		$scope.change = function () {
			for(var i = 0; i < $('#tab_bar a').length; i++) {
					$(this).siblings().removeClass('click' + i);
				}
				$(this).addClass('click' + $(this).index());
		}
	})
