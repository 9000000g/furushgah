angular.module('app.controllers', [])
    .run(function($rootScope, $location, $window, $http, $theFramework, $timeout, $tfHttp) {

        $rootScope.go = $theFramework.go;
        $rootScope.me = false;

        $rootScope.desided = false;
        $rootScope.deside = function(loggedIn) {
            if ($rootScope.desided) {
                loggedIn(true);
            } else {
                $theFramework.loading(true);
                $tfHttp.get('/users/me').then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    if (!err && res !== false) {
                        $rootScope.me = res;
                        $rootScope.desided = true;
                        loggedIn(true);
                        $theFramework.loading(false);
                    } else {
                        $rootScope.desided = true;
                        $theFramework.loading(false);
                        $theFramework.toast('ابتدا وارد حساب کاربری خود شوید!');
                        $theFramework.go('/login');
                    }

                });
                return false;
            }

        }

        $rootScope.saleTypes = [
            { text: 'فروش', value: 'sale' },
            { text: 'رهن یا اجاره', value: 'rent' }
        ];
        $rootScope.periodTypes = [
            { text: 'سالانه', value: 'year' },
            { text: 'ماهانه', value: 'month' },
            { text: 'هفتگی', value: 'week' },
            { text: 'روزانه', value: 'day' },
            { text: 'ساعتی', value: 'hour' }
        ];
        $rootScope.categoryTypes = [
            { text: 'خانه', value: 1 },
            { text: 'ماشین', value: 2 },
            { text: 'لپتاپ', value: 3 },
            { text: 'تبلت', value: 4 },
            { text: 'موبایل', value: 5 }
        ];
    })
    .controller('MainCtrl', function($scope, $rootScope, $routeParams, $tfHttp, $location, $window, $theFramework) {
        $rootScope.deside(function() {
            $scope.sidebar = false;

            $scope.inTimeline = ($routeParams.filters && $routeParams.filters.indexOf('timeline=true') !== -1);
            $scope.title = $routeParams.title ? $routeParams.title : false;


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
                $tfHttp.get('/sales/search/' + $routeParams.filters + '/' + $scope.currentPage).then(function(res) {
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



            $scope.fetch(false);
        });
    })
    .controller('SearchCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $timeout, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.inputs = {};

            $scope.submit = function() {
                var sp = '';
                var searchObj = '';
                for (var i in $scope.inputs) {
                    if (i == 'timeline' && $scope.inputs[i] == false) {
                        continue;
                    }
                    searchObj += sp + i + '=' + encodeURIComponent($scope.inputs[i]);
                    sp = '&';
                }
                if (searchObj.length > 0) {
                    $theFramework.go('/sales/search/' + searchObj + '/نتایج جست‌وجو');
                } else {
                    $theFramework.go('/sales/search');
                }
            }
        });
    })
    .controller('LoginCtrl', function($scope, $rootScope, $tfHttp, funcs, $location, $theFramework) {
        $rootScope.desided = false;
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
            $theFramework.loading();
            $tfHttp.post('/login', $scope.inputs).then(function(res) {
                $theFramework.loading(false);
                localStorage.removeItem('contacts');
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $theFramework.go('/sales/search');
                    $rootScope.me = res;
                } else {
                    $theFramework.toast('نام کاربری یا رمز عبور اشتباه است.');
                }
            });
        }

        //

    })
    .controller('ListCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, contacts, $theFramework) {
        $rootScope.deside(function() {
            $scope.contacts = [];
            $scope.items = [];
            $scope.searchbar = false;
            $scope.searched = false;
            $scope.searchContact = [];
            $scope.searchItems = [];
            $scope.search = function(num) {

                $scope.searchContacts = [];
                $scope.searchItems = [];
                var result = [];
                for (var i = 0; i < $scope.contacts.length; i++) {

                    if ($scope.contacts[i].name.indexOf(num) !== -1 || $scope.contacts[i].phone.indexOf(num) !== -1) {
                        $scope.searchContacts.push($scope.contacts[i]);
                    }
                }
                for (var i = 0; i < $scope.items.length; i++) {

                    if ($scope.items[i].alias.indexOf(num) !== -1) {
                        $scope.searchItems.push($scope.items[i]);
                    }
                }
                $scope.searched = 'جست‌وجوی ' + num;
            }
            $scope.fetch = function() {
                $scope.searched = false;
                $theFramework.loading(true);
                $tfHttp.get('/users/' + $routeParams.id + '/list').then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    $scope.items = res;
                    if ($routeParams.id == $rootScope.me.id) {
                        var list = localStorage.getItem('contacts');
                        if (!list) {
                            contacts(function(list, needApply) {
                                $theFramework.loading(false);
                                $scope.contacts = list;
                                localStorage.setItem('contacts', JSON.stringify(list));
                                if (list.length > 0 && needApply) {
                                    $scope.$apply();
                                }
                            });
                        } else {

                            $scope.contacts = JSON.parse(list);
                            $theFramework.loading(false);
                        }
                    } else {
                        $theFramework.loading(false);
                    }
                });


            }
            $scope.searchbar = false;

            $scope.checkExists = function(phone) {
                $tfHttp.get('/users/' + phone).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    if (!err) {
                        $theFramework.go('/users/' + phone)
                    } else {
                        $theFramework.toast('کاربری با شماره ' + phone + ' هنوز عضو سیستم فروشگاه نیست!' +
                            ' هروقت ما پنل اسمس گرفتیم، یه دکمه میذاریم این بغل که شما با زدن اون، این کاربر رو به سیستم دعوت کنید.',
                            6000)
                    }

                });
            }
            $scope.fetch();
        });
    })
    .controller('TrustsCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.items = [];
            $scope.fetch = function() {
                //$rootScope.loading('در حال دریافت از سرور');
                $tfHttp.get('/users/' + $routeParams.id + '/trusts').then(function(res) {
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
        });
    })
    .controller('ProfileCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.trustList = [{
                index: -1,
                text: 'نظری ندارم',
                icon: 'question'
            }, {
                index: 0,
                text: 'اعتماد ندارم',
                icon: 'star-o'
            }, {
                index: 1,
                text: 'خیلی کم به او اعتماد دارم',
                icon: 'star-half-o'
            }, {
                index: 2,
                text: 'اعتماد دارم، اما نه اعتماد کامل',
                icon: 'star-half-o'
            }, {
                index: 3,
                text: 'نسبتا به او اعتماد دارم',
                icon: 'star-half-o'
            }, {
                index: 4,
                text: 'اعتماد زیادی به او دارم',
                icon: 'star-half-o'
            }, {
                index: 5,
                text: 'کاملا به او اعتماد دارم',
                icon: 'star'
            }, ]
            $scope.item = {};

            $scope.trustModal = false;
            $scope.trustChange = function(trust) {
                $theFramework.loading();
                $tfHttp.post('/users/' + $routeParams.id + '/relation', {
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
                $tfHttp.get('/users/' + $routeParams.id).then(function(res) {
                    $theFramework.loading(false);
                    err = res.data.error;
                    res = res.data.result;
                    console.log(res);
                    $routeParams.id = res.id;
                    $scope.item = res;
                });
            }

            $scope.logout = function() {
                $tfHttp.post('/logout').then(function() {
                    $theFramework.go('/login');
                });
            }
            $scope.fetch();
        });
    })
    .controller('SaleCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.inputs = {};
            $scope.item = {};
            $scope.fetch = function(next) {
                $tfHttp.get('/sales/' + $routeParams.id).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    $scope.item = res;
                    $tfHttp.get('/sales/' + res.id + '/comments').then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        $scope.item.comments = res;
                    });
                });
            }
            $scope.fetch();
        });

    })
    .controller('NewSaleCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.inputs = {};
            $scope.file = null;


            $scope.submit = function() {
                $theFramework.loading();
                $tfHttp.file('/sales/new', $scope.inputs).then(function(res) {
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
        });
    })
    .controller('NewUserCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $location, funcs, $theFramework) {
        $scope.inputs = {};
        $scope.checkForm = function() {
            if (!$scope.inputs.mobile ||
                funcs.parsePhone($scope.inputs.mobile || '') === false ||
                !$scope.inputs.password ||
                $scope.inputs.password.length < 6 ||
                !$scope.inputs.alias ||
                $scope.inputs.alias.length < 3
            ) return false;
            console.log(
                funcs.parsePhone($scope.inputs.mobile)
            )
            $scope.inputs.mobile = funcs.parsePhone($scope.inputs.mobile);
            return true;
        }
        $scope.submit = function() {
            $theFramework.loading();
            $tfHttp.post('/users/new', $scope.inputs).then(function(res) {
                $theFramework.loading(false);
                err = res.data.error;
                res = res.data.result;
                if (!err) {
                    $theFramework.toast('کاربر ' + $scope.inputs.mobile + ' با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
                    $theFramework.go('/login');
                } else {
                    if (res.errno && res.errno == 1062) {
                        $theFramework.toast('این شماره قبلا در سیستم ثبت شده‌است. برای بازیابی رمزعبور با پشتیبانی تماس بگیرید.');
                        $theFramework.go('/login');
                    } else {
                        $theFramework.toast('بروز اشکال در ثبت نام! مجددا تلاش کنید.');
                    }
                }
            });
        }
    })