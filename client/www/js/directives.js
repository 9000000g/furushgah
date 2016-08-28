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
            link: function(scope) {
                scope.details = typeof scope.details == 'boolean' ? scope.details : false;
                scope.inputs = {};
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