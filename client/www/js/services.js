angular.module('app.services', [])
    .factory('funcs', function() {
        var ret = {};
        ret.parsePhone = function(tel) {
            //var cc = '0098';
            tel = tel.toString();
            tel = tel.split('+').join('00');
            tel = tel.replace(/[^\/\d]/g, '');
            if (tel == '') return false;
            if (tel.substr(0, 1) == '0' && tel.substr(1, 1) != '0') { // like 0912
                tel = tel;
            }
            if (tel.substr(0, 1) != '0') { // like 912
                tel = '0' + tel;
            }
            if (tel.substr(0, 2) == '00') { // like 0098912
                tel = '0' + tel.substr(4);
            }
            var reg = /(09)(\d{9})$/;
            if (reg.test(tel) !== true) {
                return false;
            }
            return tel;
        }
        ret.address = serverConfig.address + ':' + serverConfig.port;
        return ret;
    })
    .filter('parsePhone', function(funcs) {
        return funcs.parsePhone;
    })
    .filter('pDate', function() {
        return function(dt) {
            return moment(dt).format('jYYYY-jM-jD ساعت HH:mm');
        }
    })
    .filter('fPrice', function() {
        return function(item) {
            if (typeof item == 'undefined') {
                return '';
            }
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
                return item.mortgagePrice + ' ریال ودیعه و ' + item.periodPrice + ' ریال ' + periodTexts[item.period];
            }
        }
    })
    .factory('server', function($http) {
        var address = serverConfig.address + ':' + serverConfig.port;
        return {
            address: address,
            post: function(url, data) {
                data = typeof data == 'undefined' ? {} : data;
                return $http.post(address + url + '?_sid=' + _sid, data);
            },
            file: function(url, data) {
                var dt = new FormData();
                data = typeof data == 'undefined' ? {} : data;
                for (var i in data) {
                    dt.append(i, data[i]);
                }
                return $http.post(address + url + '?_sid=' + _sid, dt, {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                });
            },
            get: function(url) {
                return $http.get(address + url + '?_sid=' + _sid);
            }
        }
    })