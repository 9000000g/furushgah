angular.module('app.directives', [])
    .directive('saleDirective', function($timeout, server, $rootScope) {
        return {
            restrict: 'E',
            replace: 'true',
            transclude: true,
            scope: {
                item: '=',
                details: '='
            },
            link: function(scope, element) {
                scope.details = typeof scope.details == 'boolean' ? scope.details : false;
                scope.inputs = {};
                scope._dropdown = false;
                scope.dropdown = function() {
                    scope._dropdown = !scope._dropdown;
                }
                element.bind('click', function(e) {
                    angular.element(e.target).siblings('#upload').trigger('click');
                });
                angular.element(document).bind('click', function(event) {
                    var isClickedElementChildOfPopup = element
                        .find(event.target)
                        .length > 0;
                    if (isClickedElementChildOfPopup) {
                        return;
                    }
                    scope.$apply(function() {
                        scope._dropdown = false;
                    });
                });

                scope.itemF = {};
                scope.del = function() {
                    if (!confirm('آیا از حذف "' + scope.itemF.title + '" مطمئن هستید؟')) {
                        return;
                    }
                    server.post('/sales/' + scope.item.id + '/delete', {}).then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        if (!err) {
                            $rootScope.go('/timeline');
                        }
                    });
                }
                scope.favoriteToggle = function() {
                    var url = scope.itemF.i_favorite ? '/delete' : '/new';
                    server.post('/sales/' + scope.item.id + '/favorites' + url, {}).then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        if (!err) {
                            scope.itemF.i_favorite = !scope.itemF.i_favorite;
                            scope.itemF.favorites_count += scope.itemF.i_favorite ? 1 : -1;
                        }
                    });
                }
                scope.newComment = function() {
                    server.post('/sales/' + scope.item.id + '/comments/new', { body: scope.inputs.body }).then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        scope.inputs.body = '';
                        if (!err) {
                            scope.refresh();
                        }
                    });
                }

                scope.refresh = function() {
                    server.get('/sales/' + scope.item.id).then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        res.thumbnail = server.address + '/sales/' + res.id + '/thumbnail';
                        scope.itemF = res;
                        if (scope.details) {
                            server.get('/sales/' + res.id + '/comments').then(function(res) {
                                err = res.data.error;
                                res = res.data.result;
                                scope.itemF.comments = res;
                            });
                        }

                    });
                }
                scope.refresh();


            },
            templateUrl: 'templates/sale-directive.html'
        };
    })
    .directive('imagePicker', function($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                value: '=?'
            },
            link: function(scope) {
                //scope.value = '';
                scope.selectFile = function() {
                    alert('select file' + typeof navigator.camera)
                    navigator.camera.getPicture(function(data) {
                        scope.value = data;
                        scope.$apply();

                    }, new Function(), {
                        destinationType: 0,
                        sourceType: 2,
                        EncodingType: 0
                    });
                }
            },
            template: '<span ng-click="selectFile()" ng-transclude></span>'

        }
    })