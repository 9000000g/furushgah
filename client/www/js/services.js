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
            var y = moment(dt).format('jYY');
            var format = '';
            if (y != moment().format('jYY')) {
                format = 'jD jMMMM jYY';
            } else {
                format = 'jD jMMMM';
            }
            var ret = moment(dt).format(format);
            ret = ret
                .replace('Farvardin', 'فروردین')
                .replace('Ordibehesht', 'اردیبهشت')
                .replace('Khordad', 'خرداد')
                .replace('Tir', 'تیر')
                .replace('Amordaad', 'مرداد')
                .replace('Shahrivar', 'شهریور')
                .replace('Mehr', 'مهر')
                .replace('Aban', 'آبان')
                .replace('Azar', 'آذر')
                .replace('Dey', 'دی')
                .replace('Bahman', 'بهمن')
                .replace('Esfand', 'اسفند');
            return ret;
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
                var lastUrl = '';
                if (url.indexOf('?') == -1) {
                    lastUrl = address + url + '?_sid=' + _sid;
                } else {
                    lastUrl = address + url + '&_sid=' + _sid;
                }
                return $http.post(lastUrl, data);
            },
            file: function(url, data) {
                var dt = new FormData();
                data = typeof data == 'undefined' ? {} : data;
                for (var i in data) {
                    dt.append(i, data[i]);
                }
                var lastUrl = '';
                if (url.indexOf('?') == -1) {
                    lastUrl = address + url + '?_sid=' + _sid;
                } else {
                    lastUrl = address + url + '&_sid=' + _sid;
                }
                return $http.post(lastUrl, dt, {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                });
            },
            get: function(url) {
                var lastUrl = '';
                if (url.indexOf('?') == -1) {
                    lastUrl = address + url + '?_sid=' + _sid;
                } else {
                    lastUrl = address + url + '&_sid=' + _sid;
                }
                return $http.get(lastUrl);
            }
        }
    })
    .factory('contacts', function(funcs) {
        return function(cb) {
            cb = cb || new Function();
            var ret = [];
            if (typeof ContactFindOptions == 'function') {
                var options = new ContactFindOptions();
                options.multiple = true;
                options.hasPhoneNumber = true;
                var fields = ['displayName', 'nickName', 'id', 'phoneNumbers'];
                navigator.contacts.find(fields, function(list) {
                    var j, phone;
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].phoneNumbers) {
                            var num;
                            for (j = 0; j < list[i].phoneNumbers.length; j++) {
                                num = funcs.parsePhone(list[i].phoneNumbers[j].value);
                                if (!num || !list[i].displayName) {
                                    continue;
                                }
                                ret.push({ name: list[i].displayName, phone: num });
                            }
                        }
                    }
                    ret.sort(function(a, b) {
                        if (a.name < b.name)
                            return -1;
                        if (a.name > b.name)
                            return 1;
                        return 0;
                    });
                    cb(ret, true);
                }, function() {
                    cb([], true);
                }, options);
            } else {
                cb([
                    { name: 'علی دهقان', phone: '09163367114' },
                    { name: 'سید بختک فول‌آرشیو منش', phone: '09114540023' },
                    { name: 'دیویت بکام', phone: '09332091170' }
                ], false);
            }
        };
    })