angular.module('app.controllers', [])
    .run(function($rootScope, $location, $window, $http, $theFramework, server, $timeout) {

        $rootScope.go = $theFramework.go;
        $rootScope.global = {};
        $rootScope.me = false;

        $rootScope.displayPrice = function(item) {
            if (item.type == 'sale') {
                return item.totalPrice + ' ریال';
            } else {
                var periodTexts = {
                    year: 'سالانه',
                    month: 'ماهانه',
                    week: 'هفتگی',
                    day: 'روزانه',
                    hour: 'هر ساعت'
                }
                return item.mortgagePrice + ' ودیعه و ' + item.periodPrice + ' ریال ' + periodTexts[item.period];
            }
        }

        $rootScope._desided = false;
        $rootScope.deside = function() {
            $theFramework.loading(true);
            if ($rootScope._desided) {
                return true;
            } else {
                server.get('/users/me').then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    console.log(res);
                    var redirect;
                    if (!err && res !== false) {
                        $rootScope.me = res;
                        //redirect = '/main';
                    } else {
                        redirect = '/login';
                        $theFramework.go(redirect);
                    }

                    $rootScope._desided = true;


                    ////$rootScope.loading(false);
                });
                return false;
            }

        }
    })

.controller('MainCtrl', function($scope, $rootScope, $routeParams, server, $location, $window, $theFramework) {
        $rootScope.deside();

        $scope.sidebar = false;

        $scope.searched = false;
        for (var i in $routeParams) {
            $scope.searched = true;
            break;
        }


        $scope.items = [];
        $scope.currentPage = 1;
        $scope.btnVisible = false;

        $scope.busy = false;
        $scope.fetch = function(next) {
            next = typeof next == 'undefined' ? false : next;
            if ((next && !$scope.btnVisible) || $scope.busy) {
                return;
            }
            $theFramework.loading();
            $scope.busy = true;

            if (next) {
                $scope.currentPage++;
            } else {
                $scope.items = [];
                $scope.currentPage = 1;
            }
            var queryParams = '?';
            var and = '';
            if (typeof $routeParams.user != 'undefined') {
                queryParams += and + 'user=' + $routeParams.user;
                and = '&';
            }
            if (typeof $routeParams.timeline == 'undefined') {
                queryParams += and + 'timeline=true';
                and = '&';
            } else {
                queryParams += and + 'timeline=' + $routeParams.timeline;
                and = '&';
            }
            if (typeof $routeParams.text != 'undefined') {
                queryParams += and + 'text=' + $routeParams.text;
                and = '&';
            }
            if (queryParams == '?') {
                queryParams = '';
            }

            server.get('/sales/search/' + $scope.currentPage + queryParams).then(function(res) {
                $theFramework.loading(false);
                $scope.busy = false;
                err = res.data.error;
                res = res.data.result;
                if (err) {
                    return;
                }
                for (var i = 0; i < res.length; i++) {
                    $scope.items.push(res[i]);
                }
                if (res.length == 0) {
                    $scope.btnVisible = false;
                } else {
                    $scope.btnVisible = true;
                }
            });
        }


        $scope.logout = function() {
            server.post('/logout').then(function() {
                $theFramework.go('/login');
            });
        }
        $scope.fetch(false);
    })
    .controller('SearchCtrl', function($scope, $rootScope, server, $routeParams, $timeout, $location, $theFramework) {
        $rootScope.deside();
        $scope.inputs = {};
        $scope.submit = function() {
            var url = '/main/text/:text/timeline/:timeline';
            url = url.replace(':timeline', $scope.inputs.timeline);
            if ($scope.inputs.text) {
                url = url.replace(':text', encodeURIComponent($scope.inputs.text));
            }
            $theFramework.go(url);

        }

    })
    .controller('LoginCtrl', function($scope, $rootScope, server, funcs, $location, $theFramework) {
        //$rootScope.deside();
        $rootScope.me = false;
        $scope.inputs = {};
        $scope.checkForm = function() {
            if (!$scope.inputs.username ||
                funcs.parsePhone($scope.inputs.username) === false ||
                !$scope.inputs.password ||
                $scope.inputs.password.length < 6
            ) return false;
            return true;
        }
        $scope.login = function() {
            //$rootScope.loading('در حال ورود به سیستم');
            server.post('/login', $scope.inputs).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $theFramework.go('/main');
                    $rootScope.me = res;
                } else {
                    alert('نام کاربری یا رمز عبور اشتباه است.');
                }
                //$rootScope.loading(false);
            });
        }

        //

    })
    .controller('ListCtrl', function($scope, $rootScope, server, $routeParams, $location, contacts, $theFramework) {
        $rootScope.deside();
        $scope.items = [];
        $scope.fetch = function() {
            //$rootScope.loading('دریافت لیست');
            server.get('/users/' + $routeParams.id + '/list').then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.items = res;
                //$rootScope.loading('دریافت مخاطبین');
                contacts(function(list) {
                    //$rootScope.loading(false);
                    $scope.contacts = list;
                    if (list.length > 0) {
                        $scope.$apply();
                    }
                });

            });
        }
        $scope.searchbar = false;
        $scope.search = function(text) {
            alert(text);
        }
        $scope.fetch();
    })
    .controller('TrustsCtrl', function($scope, $rootScope, server, $routeParams, $location, $theFramework) {
        $rootScope.deside();
        $scope.items = [];
        $scope.fetch = function() {
            //$rootScope.loading('در حال دریافت از سرور');
            server.get('/users/' + $routeParams.id + '/trusts').then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.items = res;
                //$rootScope.loading(false);
            });
        }
        $scope.searchbar = false;
        $scope.search = function(text) {
            alert(text);
        }
        $scope.fetch();
    })
    .controller('ProfileCtrl', function($scope, $rootScope, server, $routeParams, $location, $theFramework) {
        $rootScope.deside();
        $scope.trustList = [{
            index: -1,
            text: 'نظری ندارم',
            icon: 'glyphicon-question-sign'
        }, {
            index: 0,
            text: 'اعتماد ندارم',
            icon: 'glyphicon-star-empty'
        }, {
            index: 1,
            text: 'خیلی کم به او اعتماد دارم',
            icon: 'glyphicon-star'
        }, {
            index: 2,
            text: 'اعتماد دارم، اما نه اعتماد کامل',
            icon: 'glyphicon-star'
        }, {
            index: 3,
            text: 'نسبتا به او اعتماد دارم',
            icon: 'glyphicon-star'
        }, {
            index: 4,
            text: 'اعتماد زیادی به او دارم',
            icon: 'glyphicon-star'
        }, {
            index: 5,
            text: 'کاملا به او اعتماد دارم',
            icon: 'glyphicon-star'
        }, ]
        $scope.item = {};

        $scope.trustModal = false;
        $scope.trustChange = function(trust) {
            $theFramework.loading();
            server.post('/users/' + $routeParams.id + '/relation', {
                trust: trust
            }).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.trustModal = false;
                if (!err) {
                    $scope.fetch();
                } else {
                    $theFramework.loading(false);
                    $theFramework.toast(res);
                }
            });
        }
        $scope.fetch = function() {
            $theFramework.loading();
            server.get('/users/' + $routeParams.id).then(function(res) {
                $theFramework.loading(false);
                err = res.data.error;
                res = res.data.result;
                console.log(res);
                $routeParams.id = res.id;
                $scope.item = res;
            });
        }
        $scope.fetch();
    })
    .controller('SaleCtrl', function($scope, $rootScope, server, $routeParams, $location, $theFramework) {
        $rootScope.deside();
        $scope.inputs = {};
        $scope.item = {
            id: $routeParams.id
        };

    })
    .controller('NewSaleCtrl', function($scope, $rootScope, server, $routeParams, $location, $theFramework) {
        $rootScope.deside();
        $scope.inputs = {};
        $scope.file = null;

        $scope.saleTypes = [
            { text: 'فروش', value: 'sale' },
            { text: 'رهن یا اجاره', value: 'rent' }
        ];
        $scope.periodTypes = [
            { text: 'سالانه', value: 'year' },
            { text: 'ماهانه', value: 'month' },
            { text: 'هفتگی', value: 'week' },
            { text: 'روزانه', value: 'day' },
            { text: 'ساعتی', value: 'hour' }
        ];
        $scope.categoryTypes = [
            { text: 'خانه', value: 1 },
            { text: 'ماشین', value: 2 },
            { text: 'لپتاپ', value: 3 },
            { text: 'تبلت', value: 4 },
            { text: 'موبایل', value: 5 }
        ];
        $scope.submit = function() {
            $theFramework.loading();
            server.file('/sales/new', $scope.inputs).then(function(res) {
                $theFramework.loading(false);
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $theFramework.go('/main');
                } else {
                    $theFramework.toast(res);
                }
            });
        }
    })
    .controller('NewUserCtrl', function($scope, $rootScope, server, $routeParams, $location, funcs, $theFramework) {
        $rootScope.deside();
        $scope.inputs = {};
        $scope.checkForm = function() {
            if (!$scope.inputs.mobile ||
                funcs.parsePhone($scope.inputs.mobile || '') === false ||
                !$scope.inputs.password ||
                $scope.inputs.password.length < 6 ||
                !$scope.inputs.alias ||
                $scope.inputs.alias.length < 3
            ) return false;
            $scope.inputs.mobile = funcs.parsePhone($scope.inputs.mobile);
            return true;
        }
        $scope.submit = function() {
            //$rootScope.loading('در حال ساخت کاربر جدید');
            //var stream = ss.createStream();
            server.post('/users/new', $scope.inputs).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                //$rootScope.loading(false);
                alert('کاربر ' + $scope.inputs.mobile + ' با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
                $theFramework.go('login');
            });
        }
    })
    .controller('RelativesCtrl', function($scope, localStorageService, $location, $theFramework) {
        $rootScope.deside();
        $scope.searchbar = false;
        $scope.contacts = new Array();

        $scope.reloadContacts = function(callback) {
            callback = typeof callback == 'function' ? callback : new Function();
            var ret = new Array();

            $scope.contacts = new Array();

            if (typeof ContactFindOptions != 'function') {
                $scope.contacts.push({ name: 'علی آملی', phone: '00989333612031' });
                $scope.contacts.push({ name: 'حسن جوادی', phone: '00989333612032' });
                $scope.contacts.push({ name: 'هوشنگ کامبیزی', phone: '00989333612033' });
                $scope.contacts.push({ name: 'کامبیز خوشنواز', phone: '00989333612034' });
                $scope.contacts.push({ name: 'ایرج برج‌نژاد', phone: '00989333612035' });
                $scope.contacts.push({ name: 'قیام کربلا', phone: '00989333612036' });
                $scope.contacts.push({ name: 'عباس کیارستمی', phone: '00989333612037' });
                $scope.contacts.push({ name: 'سید مهدی مرتعش', phone: '00989333612038' });
                $scope.contacts.push({ name: 'کامیار هاشمی', phone: '00989333612039' });
                $scope.contacts.push({ name: 'نگین الماسی', phone: '0098914' });
                $scope.contacts.push({ name: 'الناز خوش‌لاک', phone: '0098913' });
                $scope.contacts.push({ name: 'ممد ماهواره', phone: '0098912' });
                callback(false);
            } else {
                var options = new ContactFindOptions();
                /* options.filter= $scope.contactsForm.search; */
                options.multiple = true;
                options.hasPhoneNumber = true;
                var fields = ['displayName', 'nickName', 'id', 'phoneNumbers'];
                navigator.contacts.find(fields, function(list) {
                    var j, phone;
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].phoneNumbers) {
                            for (j = 0; j < list[i].phoneNumbers.length; j++) {
                                $scope.contacts.push({ name: list[i].displayName, phone: (list[i].phoneNumbers[j].value) });
                            }
                        }
                    }
                    $scope.contacts.sort(function(a, b) {
                        if (a.name < b.name)
                            return -1;
                        if (a.name > b.name)
                            return 1;
                        return 0;
                    });
                    $scope.$apply();

                    callback(true);

                }, function() { callback(false); }, options);
            }

        }

        $scope.items = localStorageService.get('items');
        if (!$scope.items) $scope.items = [];

        $scope.sidebar = false;
        $scope.searchbar = false;
        $scope.search = function(text) {
            alert(text);
        }


        $scope.reloadContacts();
    })