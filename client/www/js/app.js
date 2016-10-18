angular.module('app', ['theFramework', 'app.services', 'app.directives', 'app.controllers'])
    .config(function($routeProvider, $tfHttpProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/sales/search'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/sales/search/:filters?/:page?', {
                templateUrl: 'templates/sales.html',
                controller: 'SalesCtrl',
                resolve: (function() {
                    var obj = {};
                    obj.filters = function($route) {
                        if ($route.current.params.filters) {
                            var spl = $route.current.params.filters.split('&');
                            var filters = {};
                            var keyval;
                            for (var i in spl) {
                                keyval = spl[i].split('=');
                                if (keyval.length == 2) {
                                    filters[keyval[0]] = decodeURIComponent(keyval[1]);
                                }
                            }
                            return filters;
                        }
                        return {};
                    }

                    var currentPage = 1;


                    obj.items = function($route, $theFramework, $q, $tfHttp) {
                        $theFramework.loading(true);
                        currentPage = 1;
                        if ($route.current.params.page && $route.current.params.page != 1) {
                            currentPage = parseInt($route.current.params.page);
                        }
                        var defer = $q.defer();

                        $tfHttp.get('/sales/search/' + $route.current.params.filters + '/' + currentPage).then(function(res) {
                            err = res.data.error;
                            res = res.data.result;
                            $theFramework.loading(false);
                            if (err) {
                                defer.resolve([]);
                            } else {
                                defer.resolve(res);
                            }

                        });
                        return defer.promise;
                    }
                    obj.fetchMore = function($tfHttp, $route) {
                        return function(resolve, reject) {
                            resolve = typeof resolve != 'undefined' ? resolve : new Function();
                            reject = typeof reject != 'undefined' ? reject : new Function();
                            //alert(currentPage);
                            if (currentPage !== null) {
                                currentPage++;
                                $tfHttp.get('/sales/search/' + $route.current.params.filters + '/' + currentPage).then(function(res) {
                                    err = res.data.error;
                                    res = res.data.result;
                                    if (err) {
                                        reject(err);
                                    } else {
                                        console.log(res);
                                        if (res.length < 8) {
                                            currentPage = null;
                                            if (res.length == 0) {
                                                reject('تمام شد!');
                                            } else {
                                                resolve(res);
                                            }
                                        } else {
                                            resolve(res);
                                        }

                                    }

                                });
                            } else {
                                reject('تمام شد!');
                            }
                        }
                    }
                    return obj;
                })()
            })
            .when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
            .when('/users/new', {
                templateUrl: 'templates/new-user.html',
                controller: 'NewUserCtrl'
            })
            .when('/users/:id', {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/users/:id/list', {
                templateUrl: 'templates/list.html',
                controller: 'ListCtrl'
            })
            .when('/sales/new', {
                templateUrl: 'templates/new-sale.html',
                controller: 'NewSaleCtrl'
            })
            .when('/sales/:id', {
                templateUrl: 'templates/sale.html',
                controller: 'SaleCtrl'
            })
            .otherwise({
                redirectTo: '/sales/search'
            });
        //$locationProvider.html5Mode(true);
        $tfHttpProvider.address = serverConfig.address + ':' + serverConfig.port;
        $tfHttpProvider.sid = _sid;
    })