angular.module('app.controllers', [])
.run(function($rootScope, $location, $window, $http){
	




	$rootScope.currentPage = function(input){
		if( typeof input == 'undefined' )
			return $location.url();
		else{
			input = input.replace('#','');
			return input == $location.url();
		}
	}


	$rootScope.panels = {
		sidebar: false
	}
	$rootScope.toggleSidebar = function(){
		$rootScope.panels.sidebar = !$rootScope.panels.sidebar;
	}
	$rootScope.go = function(url){
		$rootScope.panels.sidebar = false;
		if( url == 'back' )
			$window.history.back();
		else
			$location.url( url );
	}

	$rootScope.me = false;

	$rootScope.displayPrice = function(item){
		if( item.type == 'sale' ){
			return item.totalPrice + ' ریال';
		}
		else{
			var periodTexts = {
				year: 'سالانه',
				month: 'ماهانه',
				week: 'هفتگی',
				day: 'روزانه',
				hour: 'هر ساعت'
			}
			return item.mortgagePrice + ' ودیعه و ' + item.periodPrice + ' ریال ' + periodTexts[ item.period ];
		}
	}

	$rootScope._loading = false;
	$rootScope.loading = function(val){
		val = typeof val == 'undefined'? true: val;
		$rootScope._loading = val;
	}
	$rootScope.desided = false;
})
.controller('DesideCtrl', function($scope, $rootScope, server){
	$rootScope.loading();
	server.get( '/users/me').then( function(res){
		err = res.data.error;
		res = res.data.result;
		var page = 'login';
		if( !err && res !== false ){
			page = 'main';
			$rootScope.me = res;
		}
		$rootScope.desided = true;
		$rootScope.go('/'+page);
		$rootScope.loading(false);
	});
})
.controller('MainCtrl', function($scope, $rootScope, $routeParams, server){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.sidebar = false;
	$scope.searchbar = false;
	$scope.items = [];
	$scope.currentPage = 1;
	$scope.btnVisible = false;
	$scope.fetch = function(next){
		$rootScope.loading();
		next = typeof next == 'undefined'? false: next;
		if( next ) {
			$scope.currentPage++;
		}
		else{
			$scope.currentPage = 1;
		}
		
		server.get( '/timeline/'+ $scope.currentPage).then( function(res){
			err = res.data.error;
			res = res.data.result;
			for( var i = 0; i < res.length; i++ ){
				res[i].thumbnail = server.address+'/sales/'+res[i].id+'/thumbnail';
			}
			if( !next ) {
				$scope.items = res;
			}
			else{
				$scope.items = $scope.items.concat( res );
			}
			if( res.length < 8 ){
				$scope.btnVisible = false;
			}
			else{
				$scope.btnVisible = true;
			}
			$rootScope.loading(false);
		});
	}
	$scope.fetch(false);
})
.controller('LoginCtrl', function($scope, $rootScope, server, funcs){
	$rootScope.me = false;
	$scope.inputs = {};
	$scope.checkForm = function(){
		if( !$scope.inputs.username ||
			funcs.parsePhone( $scope.inputs.username ) === false ||
			!$scope.inputs.password ||
			$scope.inputs.password.length < 6
		) return false;
		return true;
	}
	$scope.login = function(){
		$rootScope.loading();
		server.post( '/login', $scope.inputs ).then( function(res){
			err = res.data.error;
			res = res.data.result;
			if( !err ){
				$rootScope.go('/main');
				$rootScope.me = res;
			}
			else{
				alert('نام کاربری یا رمز عبور اشتباه است.');
			}
			$rootScope.loading(false);
		});
	}

	server.post( '/logout' );

})
.controller('FollowersCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.items = [];
	$scope.fetch = function(){
		$rootScope.loading();
		server.get( '/users/'+$routeParams.id+'/followers').then( function(res){
			err = res.data.error;
			res = res.data.result;
			$scope.items = res;
			$rootScope.loading(false);
		});
	}
	$scope.searchbar = false;
	$scope.search = function(text){
		alert(text);
	}
	$scope.fetch();
})
.controller('FollowingCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.items = [];
	$scope.fetch = function(){
		$rootScope.loading();
		server.get( '/users/'+$routeParams.id+'/following').then( function(res){
			err = res.data.error;
			res = res.data.result;
			$scope.items = res;
			$rootScope.loading(false);
		});
	}
	$scope.searchbar = false;
	$scope.search = function(text){
		alert(text);
	}
	$scope.fetch();
})
.controller('ProfileCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.item = [];
	$scope.sales = [];
	$scope.amIFollow = false;
	$scope.currentPage = 1;
	$scope.btnVisible = false;
	$scope.followToggle = function(){
		if( $scope.amIFollow ){
			server.post( '/users/'+$routeParams.id+'/unfollow', {}).then( function(res){
				err = res.data.error;
				res = res.data.result;
				$scope.amIFollow = false;
			});
		}
		else{
			server.post( '/users/'+$routeParams.id+'/follow', {}).then( function(res){
				err = res.data.error;
				res = res.data.result;
				$scope.amIFollow = true;
			});
		}
	}
	$scope.fetch = function(next){
		$rootScope.loading();
		next = typeof next == 'undefined'? false: next;
		if( next ) {
			$scope.currentPage++;
		}
		else{
			$scope.currentPage = 1;
		}
		server.get( '/users/'+$routeParams.id).then(function(res){
			err = res.data.error;
			res = res.data.result;
			$scope.item = res;
			server.get( '/users/'+$routeParams.id+'/sales/'+$scope.currentPage).then( function(res){
				err = res.data.error;
				res = res.data.result;
				for( var i = 0; i < res.length; i++ ){
					res[i].thumbnail = server.address+'/sales/'+res[i].id+'/thumbnail';
				}
				if( !next ) {
					$scope.sales = res;
				}
				else{
					$scope.sales = $scope.sales.concat( res );
				}
				if( res.length < 8 ){
					$scope.btnVisible = false;
				}
				else{
					$scope.btnVisible = true;
				}

				server.get( '/users/'+$routeParams.id+'/checkFollow').then(function(res){
					err = res.data.error;
					res = res.data.result;
					$scope.amIFollow = res;
				});
				$rootScope.loading(false);
			});
		});
	}
	$scope.fetch();
})
.controller('SaleCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.canIComment = false;
	$scope.inputs = {};
	$scope.item = {};
	$scope.fetch = function(){
		$rootScope.loading();
		server.get( '/sales/'+$routeParams.id).then( function(res){
			err = res.data.error;
			res = res.data.result;
			res.thumbnail = server.address+'/sales/'+res.id+'/thumbnail';
			$scope.item = res;
			server.get( '/sales/'+$routeParams.id+'/comments').then(function(res){
				err = res.data.error;
				res = res.data.result;
				$scope.item.comments = res;
				server.get( '/sales/'+$routeParams.id+'/checkComment').then(function(res){
					err = res.data.error;
					res = res.data.result;
					$scope.canIComment = !res;
					$rootScope.loading(false);
				});
			});
		});
	}
	$scope.newComment = function(){
		$rootScope.loading();
		server.post( '/sales/'+$routeParams.id+'/comments/new', {body: $scope.inputs.body}).then(function(res){
			err = res.data.error;
			res = res.data.result;
			$rootScope.loading(false);
			if( !err ) {
				$scope.fetch();
			}
		});
	}
	$scope.delete = function(){
		$rootScope.loading();
		server.post( '/sales/'+$routeParams.id+'/delete').then( function(res){
			err = res.data.error;
			res = res.data.result;
			$rootScope.loading(false);
			if( !err ) {
				$rootScope.go('timeline');
			}
		});
	}

	$scope.fetch();
})
.controller('NewSaleCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.inputs = {
		type: 'sale',
		period: 'month'
	};
	$scope.file = null;

	$scope.saleTypes = [
		{text: 'فروش', value: 'sale'},
		{text: 'رهن یا اجاره', value: 'rent'}
	];
	$scope.periodTypes = [
		{text: 'سالانه', value: 'year'},
		{text: 'ماهانه', value: 'month'},
		{text: 'هفتگی', value: 'week'},
		{text: 'روزانه', value: 'day'},
		{text: 'ساعتی', value: 'hour'}
	];
	$scope.categoryTypes = [
		{text: 'خانه', value: 1},
		{text: 'ماشین', value: 2},
		{text: 'لپتاپ', value: 3},
		{text: 'تبلت', value: 4},
		{text: 'موبایل', value: 5}
	];
	$scope.submit = function(){
		$rootScope.loading();
		console.log( $scope.inputs );
		server.file('/sales/new', $scope.inputs).then(function(res){
			$rootScope.loading(false);
			err = res.data.error;
			res = res.data.result;
			if( !err ){
				$rootScope.go('timeline');
			}
			else{
				alert( res );
			}
		});
	}
})
.controller('NewUserCtrl', function($scope, $rootScope, server, $routeParams){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.inputs = {};
	$scope.checkForm = function(){
		if( !$scope.inputs.username ||
			funcs.parsePhone( $scope.inputs.mobile ) === false ||
			!$scope.inputs.password ||
			$scope.inputs.password.length < 6 ||
			!$scope.alias ||
			$scope.alias.length < 4
		) return false;
		return true;
	}
	$scope.submit = function(){
		$rootScope.loading();
		//var stream = ss.createStream();
		server.post( '/users/new', $scope.inputs).then( function(res){
			err = res.data.error;
			res = res.data.result;
			$rootScope.loading(false);
			alert('کاربر '+$scope.inputs.mobile+' با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
			$rootScope.go('login');
		});
	}
})
.controller('RelativesCtrl', function($scope, localStorageService){
	if( !$rootScope.desided ){
		$rootScope.go('/deside');
		return;
	}
	$scope.searchbar = false;
	$scope.contacts = new Array();

	$scope.reloadContacts = function(callback){
		callback = typeof callback == 'function'? callback: new Function();
		var ret = new Array();

		$scope.contacts = new Array();

		if( typeof ContactFindOptions != 'function' ) {
			$scope.contacts.push( {name: 'علی آملی', phone: '00989333612031'} );
			$scope.contacts.push( {name: 'حسن جوادی', phone: '00989333612032'} );
			$scope.contacts.push( {name: 'هوشنگ کامبیزی', phone: '00989333612033'} );
			$scope.contacts.push( {name: 'کامبیز خوشنواز', phone: '00989333612034'} );
			$scope.contacts.push( {name: 'ایرج برج‌نژاد', phone: '00989333612035'} );
			$scope.contacts.push( {name: 'قیام کربلا', phone: '00989333612036'} );
			$scope.contacts.push( {name: 'عباس کیارستمی', phone: '00989333612037'} );
			$scope.contacts.push( {name: 'سید مهدی مرتعش', phone: '00989333612038'} );
			$scope.contacts.push( {name: 'کامیار هاشمی', phone: '00989333612039'} );
			$scope.contacts.push( {name: 'نگین الماسی', phone: '0098914'} );
			$scope.contacts.push( {name: 'الناز خوش‌لاک', phone: '0098913'} );
			$scope.contacts.push( {name: 'ممد ماهواره', phone: '0098912'} );
			callback(false);
		}
		else{
			var options = new ContactFindOptions();
			/* options.filter= $scope.contactsForm.search; */
			options.multiple=true;
			options.hasPhoneNumber = true;
			var fields = ['displayName', 'nickName', 'id', 'phoneNumbers'];
			navigator.contacts.find(fields, function(list){
				var j, phone;
				for( var i =0; i < list.length; i++ ){
					if( list[i].phoneNumbers ){
						for( j = 0; j < list[i].phoneNumbers.length; j++ ){
							$scope.contacts.push( {name: list[i].displayName, phone: ( list[i].phoneNumbers[j].value )} );
						}
					}
				}
				$scope.contacts.sort(function(a,b){
					if (a.name< b.name)
						return -1;
					if (a.name> b.name)
						return 1;
					return 0;
				});
				$scope.$apply();

				callback(true);

			}, function(){callback(false);}, options);
		}

	}

	$scope.items = localStorageService.get('items');
	if( !$scope.items ) $scope.items = [];

	$scope.sidebar = false;
	$scope.searchbar = false;
	$scope.search = function(text){
		alert(text);
	}


	$scope.reloadContacts();
})
