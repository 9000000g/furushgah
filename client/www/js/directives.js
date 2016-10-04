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

                scope.del = function() {
                    if (!confirm('آیا از حذف "' + scope.item.title + '" مطمئن هستید؟')) {
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

                scope.newComment = function() {
                    server.post('/sales/' + scope.item.id + '/comments/new', { body: scope.inputs.body }).then(function(res) {
                        err = res.data.error;
                        res = res.data.result;
                        if (!err) {
                            scope.item.comments.push({
                                user: $rootScope.me.id,
                                user_alias: $rootScope.me.alias,
                                body: scope.inputs.body
                            });
                            scope.inputs.body = '';
                        }
                    });
                }

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