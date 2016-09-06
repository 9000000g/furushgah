angular.module('app.controllers', [])
    .run(function($rootScope, $location, $window, $http) {
        $rootScope.go = function(url) {
            if (url == 'back') {
                url = '/main';
            }
            if (url == 'back') {
                $window.history.back();
            } else {
                $location.url(url);
            }
        }

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

        $rootScope._loading = {
            text: '',
            active: false
        }
        $rootScope.loading = function(val) {
            if (typeof val == 'string') {
                $rootScope._loading.active = true;
                $rootScope._loading.text = val + '...';
            } else if (typeof val == 'boolean' || typeof val == 'undefined') {
                val = typeof val == 'undefined' ? true : val;
                if (val == true) {
                    $rootScope._loading.text = 'لطفا صبر کنید...';
                }
                $rootScope._loading.active = val;
            }
        }
        $rootScope.desided = false;
    })
    .controller('DesideCtrl', function($scope, $rootScope, server, $routeParams, $timeout) {
        var redirect = '/main';
        if ($routeParams.redirect) {
            redirect = atob($routeParams.redirect);
        }
        //$rootScope.loading();
        server.get('/users/me').then(function(res) {
            err = res.data.error;
            res = res.data.result;
            if (!err && res !== false) {
                $rootScope.me = res;
            } else {
                redirect = '/login';
            }
            $timeout(function() {
                $rootScope.desided = true;
                $rootScope.go(redirect);
            }, 1300);
            //$rootScope.loading(false);
        });
    })
    .controller('MainCtrl', function($scope, $rootScope, $routeParams, server, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.sidebar = false;
        $scope.searchbar = false;
        $scope.items = [];
        $scope.currentPage = 1;
        $scope.btnVisible = false;
        $scope.fetch = function(next) {
            $rootScope.loading('در حال دریافت از سرور');
            next = typeof next == 'undefined' ? false : next;
            if (next) {
                $scope.currentPage++;
            } else {
                $scope.items = [];
                $scope.currentPage = 1;
            }
            var queryParams = '?';
            if (typeof $routeParams.user != 'undefined') {
                queryParams += 'user=' + $routeParams.user;
            }
            if (queryParams == '?') {
                queryParams = '';
            }

            server.get('/sales/search/' + $scope.currentPage + queryParams).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                for (var i = 0; i < res.length; i++) {
                    res[i].thumbnail = server.address + '/sales/' + res[i].id + '/thumbnail';
                }

                for (var i = 0; i < res.length; i++) {
                    $scope.items.push(res[i]);
                }
                if (res.length == 0) {
                    $scope.btnVisible = false;
                } else {
                    $scope.btnVisible = true;
                }
                //console.log($scope.items);
                $rootScope.loading(false);
            });
        }
        $scope.logout = function() {
            server.post('/logout').then(function() {
                $rootScope.go('/login');
            });
        }
        $scope.fetch(false);
    })
    .controller('LoginCtrl', function($scope, $rootScope, server, funcs, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
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
            $rootScope.loading('در حال ورود به سیستم');
            server.post('/login', $scope.inputs).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $rootScope.go('/main');
                    $rootScope.me = res;
                } else {
                    alert('نام کاربری یا رمز عبور اشتباه است.');
                }
                $rootScope.loading(false);
            });
        }

        //

    })
    .controller('FollowersCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.items = [];
        $scope.fetch = function() {
            $rootScope.loading('در حال دریافت از سرور');
            server.get('/users/' + $routeParams.id + '/followers').then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.items = res;
                $rootScope.loading(false);
            });
        }
        $scope.searchbar = false;
        $scope.search = function(text) {
            alert(text);
        }
        $scope.fetch();
    })
    .controller('FollowingCtrl', function($scope, $rootScope, server, $routeParams, $location, contacts) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }

        $scope.items = [];
        $scope.fetch = function() {
            $rootScope.loading('دریافت لیست');
            server.get('/users/' + $routeParams.id + '/following').then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.items = res;
                $rootScope.loading('دریافت مخاطبین');
                contacts(function(list) {
                    $rootScope.loading(false);
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
    .controller('TrustsCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.items = [];
        $scope.fetch = function() {
            $rootScope.loading('در حال دریافت از سرور');
            server.get('/users/' + $routeParams.id + '/trusts').then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.items = res;
                $rootScope.loading(false);
            });
        }
        $scope.searchbar = false;
        $scope.search = function(text) {
            alert(text);
        }
        $scope.fetch();
    })
    .controller('ProfileCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.item = [];
        $scope.followToggle = function() {
            if ($scope.relation.follow == 1) {
                if (confirm('آیا از حذف این کاربر از لیست خود مطمئنید؟') !== true) {
                    return;
                }
                server.post('/users/' + $routeParams.id + '/relation', {
                    follow: 0
                }).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    if (!err) {
                        $scope.relation.follow = 0;
                    } else {
                        alert(res);
                    }
                });
            } else {
                server.post('/users/' + $routeParams.id + '/relation', {
                    follow: 1
                }).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    if (!err) {
                        $scope.relation.follow = 1;
                    } else {
                        alert(res);
                    }
                });
            }
        }
        $scope.trustModal = false;
        $scope.trustChange = function(trust) {
            server.post('/users/' + $routeParams.id + '/relation', {
                trust: trust
            }).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.trustModal = false;
                if (!err) {
                    $scope.relation.trust = trust;
                } else {
                    alert(res);
                }
            });
        }
        $scope.fetch = function() {
            $rootScope.loading('در حال دریافت از سرور');
            server.get('/users/' + $routeParams.id).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $scope.item = res;
                server.get('/users/' + $routeParams.id + '/relation').then(function(res2) {
                    err2 = res2.data.error;
                    res2 = res2.data.result;
                    $scope.relation = res2;
                    $rootScope.loading(false);
                });
            });
        }
        $scope.fetch();
    })
    .controller('SaleCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.inputs = {};
        $scope.item = {
            id: $routeParams.id
        };

    })
    .controller('NewSaleCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.inputs = {
            type: 'sale',
            period: 'month'
        };
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
            $rootScope.loading('در حال ارسال اطلاعات');
            server.file('/sales/new', $scope.inputs).then(function(res) {
                $rootScope.loading(false);
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $rootScope.go('timeline');
                } else {
                    alert(res);
                }
            });
        }
    })
    .controller('NewUserCtrl', function($scope, $rootScope, server, $routeParams, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
        $scope.inputs = {};
        $scope.checkForm = function() {
            if (!$scope.inputs.username ||
                funcs.parsePhone($scope.inputs.mobile) === false ||
                !$scope.inputs.password ||
                $scope.inputs.password.length < 6 ||
                !$scope.alias ||
                $scope.alias.length < 4
            ) return false;
            return true;
        }
        $scope.submit = function() {
            $rootScope.loading('در حال ساخت کاربر جدید');
            //var stream = ss.createStream();
            server.post('/users/new', $scope.inputs).then(function(res) {
                err = res.data.error;
                res = res.data.result;
                $rootScope.loading(false);
                alert('کاربر ' + $scope.inputs.mobile + ' با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
                $rootScope.go('login');
            });
        }
    })
    .controller('RelativesCtrl', function($scope, localStorageService, $location) {
        if (!$rootScope.desided) {
            $rootScope.go('/deside/' + btoa($location.$$path));
            return;
        }
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