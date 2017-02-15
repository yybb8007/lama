angular.module('marketPage', [])
	.config(function ($stateProvider) {
		$stateProvider
			.state('market', {
				url: '/market',
				templateUrl: 'src/views/market/market.html'
			})
		
	})
	
	.controller('marketCtrl', function () {
		
	})
