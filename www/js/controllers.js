angular.module('app.controllers', [])
.run(function($rootScope, $location, $window){
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
})
.controller('MainCtrl', function($scope){
	$scope.sidebar = false;
})
.controller('LoginCtrl', function($scope, $rootScope){
	$scope.inputs = {};
	$scope.userTypes = [
		{text: 'بازدید', value: 1},
		{text: 'نصب', value: 2}
	];
	$scope.login = function(){
		$rootScope.go('/main');
	}
})
.controller('TimelineCtrl', function($scope, localStorageService, $routeParams){
	$scope.searchbar = false;
	$scope.posts = [
		{
			user: {
				id: 2,
				name: 'امیربهادر میرمیرانی',
				avatar: 'http://1.gravatar.com/avatar/e6edc120f5ba1e925f466d4a771c9207?size=35'
			},
			id: 2,
			image: './images/2.jpg',
			body: 'تیشرت نخی عالی همین هفته از ترکیه برام آوردن. فقط یه بار پوشیدمش باهاش رفتم از سر کوچه ماست خریدم.',
			price: '۲۵۰،۰۰۰',
			score: 3
		},
		{
			user: {
				id: 1,
				name: 'سالار کابلی',
				avatar: 'http://0.gravatar.com/avatar/148d9d168a85e36d09b20585e15e0feb?size=35'
			},
			id: 1,
			image: './images/1.jpg',
			body: 'پراید مدل ۸۲ سالم، فقط یه بار چپ کرده، ولی بدون رنگه. به خریدار واقعی تخفیف میدم.',
			price: '۳۵۰،۰۰۰،۰۰۰',
			score: 5
		},
		{
			user: {
				id: 3,
				name: 'سیامک عبدالقادری',
				avatar: 'http://0.gravatar.com/avatar/d01f3e82b2b741532475b451e939c062?size=35'
			},
			id: 3,
			image: './images/3.jpg',
			body: 'خدایی این توپارو داییم برام از بانه آورده، یه قرون زیر قیمت نمیدم. اصن نمیخوام، نمیفروشم. خدافس.',
			price: '۸۰۰،۰۰۰،۰۰۰',
			score: 3
		},
		{
			user: {
				id: 4,
				name: 'علی پریشان‌احوال',
				avatar: 'http://1.gravatar.com/avatar/0f744ca6fd6417e13ab1d8f370a59aca?size=35'
			},
			id: 4,
			image: './images/4.jpg',
			body: 'کیف اصل فدرال. خدایی جنس و کیفیتشو ببین، اگه پسند کردی ببر.',
			price: '۳۳۰،۰۰۰',
			score: 2
		}
	];
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
