angular.module('cartPage', [])
	.config(function ($stateProvider) {
		$stateProvider
			.state('cart', {
				url: '/cart',
				templateUrl: 'src/views/cart/cart.html'
			})
		
	})
	
	.controller('cartCtrl', function () {
		
	})
