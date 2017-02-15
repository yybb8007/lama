angular.module('salePage', [])
	.config(function($stateProvider) {
		$stateProvider
			.state('sale', { // 此处的sale应该与index.html中的ui-sref中的sale保持一致
				url: '/sale', // 此处的sale是浏览器中url中显示的名称
				controller: 'saleCtrl',
				templateUrl: 'src/views/sale/sale.html'
			})

			.state('sale_bbfs', {
				url: '/bbfs',
				templateUrl: 'src/views/sale/sale_bbfs/sale_bbfs.html'
			})
			.state('sale_bsq', {
				url: '/bsq',
				templateUrl: 'src/views/sale/sale_bsq/sale_bsq.html'
			})
			.state('sale_yczq', {
				url: '/yczq',
				templateUrl: 'src/views/sale/sale_yczq/sale_yczq.html'
			})
			.state('sale_ymjq', {
				url: '/ymjq',
				templateUrl: 'src/views/sale/sale_ymjq/sale_ymjq.html'
			})
			.state('sale_zyzq', {
				url: '/zyzq',
				templateUrl: 'src/views/sale/sale_zyzq/sale_zyzq.html'
			})

	})

	.controller('saleCtrl', function($scope, $http) {
		$scope.mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			autoplay: 2000,
			loop: true,
			observer:true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
		
		$scope.change1 = function () {
			$('.nav li:eq(0)').css({
				'color': '#fc6496',
				'border-bottom': '0.053333rem solid #fc6496'
			});
			$('.nav li:eq(0)').siblings('li').css({
				'color': '#735660',
				'border-bottom': 'none'
			});
		}
		$scope.change2 = function () {
			$('.nav li:eq(1)').css({
				'color': '#fc6496',
				'border-bottom': '0.053333rem solid #fc6496'
			});
			$('.nav li:eq(1)').siblings('li').css({
				'color': '#735660',
				'border-bottom': 'none'
			});
		}
		$scope.change3 = function () {
			$('.nav li:eq(2)').css({
				'color': '#fc6496',
				'border-bottom': '0.053333rem solid #fc6496'
			});
			$('.nav li:eq(2)').siblings('li').css({
				'color': '#735660',
				'border-bottom': 'none'
			});
		}
		
		
		
		$http.get('http://localhost:8888/src/views/data/sale1.json')
		    .then(function(res){
		      return res.data
		    })
		    .then(function(res){
		        console.log(res);
		        $scope.pro = res;
		    })
		
		$http.get('http://localhost:8888/src/views/data/sale2.json')
		    .then(function(res){
		      return res
		    })
		    .then(function(res){
		        console.log(res);
		        $scope.pro1 = res;
		    })
		
	})
