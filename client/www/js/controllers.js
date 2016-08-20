angular.module('app.controllers', [])
.run(function($rootScope, $location, $window, $http, $server){

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
	$rootScope.server = 'http://127.0.0.1:3001';
	$rootScope.reqUrl = function(url){
		url = typeof url == 'undefined'? '': url.toString();
		return $rootScope.server + (url.indexOf(0) == '/' ? '' : '/') + url;
	}
	$rootScope.getc = function(){ //arguments

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
	$rootScope.go('/deside');
})
.controller('DesideCtrl', function($scope, $rootScope, $server){
	$rootScope.loading();
	$server.emit( 'users/:id', {id:'me'}, function(err,res){
		var page = 'login';
		if( !err && res !== false ){
			page = 'main';
			$rootScope.me = res;
		}
		$rootScope.go('/'+page);
		$rootScope.loading(false);
	});
})
.controller('MainCtrl', function($scope){
	$scope.sidebar = false;
})
.controller('LoginCtrl', function($scope, $rootScope, $server){
	$rootScope.me = false;
	$scope.inputs = {};
	$scope.login = function(){
		$rootScope.loading();
		$server.emit( 'login', $scope.inputs, function(err,res){
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

	$server.emit( 'logout' );

})
.controller('FollowersCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.items = [];
	$scope.fetch = function(){
		$rootScope.loading();
		$server.emit( 'users/:id/followers', {id: $routeParams.id}, function(err, res){
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
.controller('FollowingCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.items = [];
	$scope.fetch = function(){
		$rootScope.loading();
		$server.emit( 'users/:id/following', {id: $routeParams.id}, function(err, res){
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
.controller('ProfileCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.item = [];
	$scope.sales = [];
	$scope.amIFollow = false;

	$scope.followToggle = function(){
		if( $scope.amIFollow ){
			$server.emit( 'users/:id/unfollow', {id: $routeParams.id}, function(err, res){
				console.log(err,res);
				$scope.amIFollow = false;
			});
		}
		else{
			$server.emit( 'users/:id/follow', {id: $routeParams.id}, function(err, res){
				console.log(err,res);
				$scope.amIFollow = true;
			});
		}
	}
	$scope.fetch = function(){
		$rootScope.loading();
		$server.emit( 'users/:id', {id: $routeParams.id}, function(err, res){
			$scope.item = res;
			$server.emit( 'users/:id/sales', {id: $routeParams.id}, function(err, res){
				for( var i = 0; i < res.length; i++ ){
					res[i].thumbnail = $server.address+'/sales/'+res[i].id+'/thumbnail.jpg';
				}
				$scope.sales = res;
				$server.emit( 'users/:id/checkFollow', {id: $routeParams.id}, function(err, res){
					$scope.amIFollow = res;
				});
				$rootScope.loading(false);
			});
		});
	}
	$scope.fetch();
})
.controller('TimelineCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.searchbar = false;
	$scope.items = [];
	$scope.fetch = function(){
		$rootScope.loading();
		$server.emit( 'timeline', {}, function(err, res){
			for( var i = 0; i < res.length; i++ ){
				res[i].thumbnail = $server.address+'/sales/'+res[i].id+'/thumbnail.jpg';
			}
			$scope.items = res;
			$rootScope.loading(false);
		});
	}
	$scope.fetch();
})
.controller('SaleCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.canIComment = false;
	$scope.inputs = {};
	$scope.item = {};
	$scope.fetch = function(){
		$rootScope.loading();
		$server.emit( 'sales/:id', {id: $routeParams.id}, function(err, res){
			res.thumbnail = $server.address+'/sales/'+res.id+'/thumbnail.jpg';
			$scope.item = res;
			$server.emit( 'sales/:id/comments', {id: $routeParams.id}, function(err, res){
				$scope.item.comments = res;
				$server.emit( 'sales/:id/checkComment', {id: $routeParams.id}, function(err, res){
					$scope.canIComment = !res;
					$rootScope.loading(false);
				});
			});
		});
	}
	$scope.newComment = function(){
		$rootScope.loading();
		$server.emit( 'sales/:id/comments/new', {id: $routeParams.id, body: $scope.inputs.body}, function(err, res){
			$rootScope.loading(false);
			console.log(err,res);
			if( !err ) {
				$scope.fetch();
			}
		});
	}
	$scope.delete = function(){
		$rootScope.loading();
		$server.emit( 'sales/:id/delete', {id: $routeParams.id}, function(err, res){
			$rootScope.loading(false);
			if( !err ) {
				$rootScope.go('timeline');
			}
		});
	}

	$scope.fetch();
})
.controller('NewSaleCtrl', function($scope, $rootScope, $server, $routeParams){
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
		var stream = ss.createStream();
		ss($server).emit( 'sales/new', stream, $scope.inputs, function(err, res){
			$rootScope.loading(false);
			//console.log(err, res);
			if( err ) {
				console.log(err);
			}
			else{
				$rootScope.go('timeline');
			}
		});
		ss.createBlobReadStream( $scope.file ).pipe( stream );
	}
})
.controller('NewUserCtrl', function($scope, $rootScope, $server, $routeParams){
	$scope.inputs = {};

	$scope.submit = function(){
		$rootScope.loading();
		var stream = ss.createStream();
		$server.emit( 'users/new', $scope.inputs, function(err, res){
			$rootScope.loading(false);
			if( err ) {
				console.log(res);
			}
			else{
				alert('کاربر '+$scope.inputs.mobile+' با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
				$rootScope.go('login');
			}
		});
	}
})
.controller('RelativesCtrl', function($scope, localStorageService){
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
