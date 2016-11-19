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
                        //$theFramework.go('/sales/search');


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
    .controller('SalesCtrl', function($scope, $rootScope, $routeParams, $tfHttp, $timeout, $window, $theFramework, items, filters, fetchMore) {
        $rootScope.deside(function() {
            $scope.sidebar = false;
            $scope.bars = true;

            $scope.goTimeline = function() {
                filters.timeline = true;
                delete filters.user;
                $theFramework.go('/sales/search/' + $tfHttp.serialize(filters))
            }


            $scope.goEntireSystem = function() {
                delete filters.timeline;
                delete filters.user;
                $theFramework.go('/sales/search/' + $tfHttp.serialize(filters))
            }

            //$scope.inTimeline = ($routeParams.filters && $routeParams.filters.indexOf('timeline=true') !== -1);
            //$scope.title = $routeParams.filters ? $routeParams.title : false;

            $scope.inTimeline = (filters.timeline == 'true');
            $scope.inUser = (typeof filters.user != 'undefined');
            $scope.searched = Object.keys(filters).length >= 2 || (Object.keys(filters).length == 1 && (typeof filters.timeline == 'undefined'));


            $scope.items = items;

            $scope.filters = filters;

            $scope.title = '';
            if ($scope.inUser) {
                $tfHttp.get('/users/' + filters.user).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    $scope.title = res.alias;
                });
            }

            var busy = false;
            var ended = false;
            $scope.next = function() {
                if (!ended) {
                    $theFramework.loading(true);
                    busy = true;
                    fetchMore(function(newItems) {
                        console.log('fetched')
                        for (var i = 0; i < newItems.length; i++) {
                            $scope.items.push(newItems[i]);
                        }
                        busy = false;
                        $theFramework.loading(false);
                    }, function(err) {
                        console.log('err')
                        $theFramework.loading(false);
                        $theFramework.toast(err);
                        busy = false;
                        ended = true;
                    });
                    //$theFramework.go('/sales/search/' + $routeParams.filters + '/' + (page + 1));
                }
            }

            $scope.first = function() {
                if (!busy) {
                    busy = true;
                    $theFramework.go('/sales/search/' + $routeParams.filters + '/' + 1);
                }
            }
        });
    })
    .controller('SearchCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $timeout, $location, $theFramework) {
        $rootScope.deside(function() {
            $scope.inputs = {};
            $scope.bars = true;
            $scope.submit = function() {
                var searchObj = $tfHttp.serialize($scope.inputs);
                $theFramework.go('/sales/search/' + searchObj);
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
                if (num === '') {
                    $scope.searchContact = $scope.contacts;
                    $scope.searchItems = $scope.items;
                    $scope.searched = false;
                    return;
                }

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
                    $scope.searchItems = $scope.items;
                    if ($routeParams.id == $rootScope.me.id) {
                        var list = localStorage.getItem('contacts');
                        if (!list) {
                            contacts(function(list, needApply) {
                                $theFramework.loading(false);
                                $scope.contacts = list;
                                $scope.searchContacts = $scope.contacts;

                                localStorage.setItem('contacts', JSON.stringify(list));
                                if (list.length > 0 && needApply) {
                                    $scope.$apply();
                                }
                            });
                        } else {
                            $scope.contacts = JSON.parse(list);
                            $scope.searchContacts = $scope.contacts;
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
            $scope.title = $routeParams.title ? $routeParams.title : false;
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
            $scope.title = $routeParams.title ? $routeParams.title : false;
            $scope.delete = function() {
                if (!confirm('آیا از حذف این محصول مطمئنید؟')) {
                    return;
                }
                $tfHttp.post('/sales/' + $routeParams.id + '/delete').then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    if (err) {
                        $theFramework.toast('بروز اشکال در حذف محصول!');
                    } else {
                        $theFramework.toast('محصول شما با موفقیت حذف شد!');
                        $theFramework.go('back');
                    }
                });
            }
            $scope.fetch = function(next) {
                $tfHttp.get('/sales/' + $routeParams.id).then(function(res) {
                    err = res.data.error;
                    res = res.data.result;
                    $scope.item = res;
                    console.log(res);
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
    .controller('NewSaleCtrl', function($scope, $rootScope, $tfHttp, $routeParams, $timeout, $theFramework) {
        $rootScope.deside(function() {
            $scope.inputs = {};
            $scope.file = null;
            $scope.busy = false;

            $scope.submit = function() {
                $scope.busy = true;
                $theFramework.loading();
                console.log($scope.inputs);
                $tfHttp.post('/sales/new', $scope.inputs).then(function(res) {
                    $theFramework.loading(false);
                    err = res.data.error;
                    res = res.data.result;
                    if (!err) {
                        $theFramework.toast('با موفقیت اضافه شد!');
                        $theFramework.go('/sales/search/timeline=true');
                    } else {
                        $theFramework.toast(res);
                    }
                });
            }
            $scope.imageClass = 'btn-default';
            $scope.imageChanged = function() {
                $timeout(function() {
                    $scope.imageClass = 'btn-primary';
                })
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