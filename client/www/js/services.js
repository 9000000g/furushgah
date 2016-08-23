function mySessionId(){
    var sid = localStorage.getItem('_sid');
    if( !sid ){
        sid = '';
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for( var i=0; i < 10; i++ ){
            sid += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        sid += '_' + Date.now();
        localStorage.setItem('_sid', sid);
    }
    return sid;
}
var sidQuery = '_sid=' + mySessionId();


angular.module('app.services', [])
.factory('funcs', function() {
    var address = 'http://127.0.0.1:3001';
	var ret = {};
    /*socketFactory({
		ioSocket: io.connect(address, {query: '_sid='+mySessionId()})
	});*/
    ret.parsePhone = function(tel){
        //var cc = '0098';
        tel = tel.toString();
        tel = tel.split('+').join('00');
        tel = tel.replace(/[^\/\d]/g, '');
        if( tel == '' ) return false;
        if( tel.substr(0,1) == '0' && tel.substr(1,1) != '0' ){ // like 0912
            tel = tel;
        }
        if( tel.substr(0,1) != '0' ){ // like 912
            tel = '0' + tel;
        }
        if( tel.substr(0,2) == '00' ){ // like 0098912
            tel = '0' + tel.substr(4);
        }
        var reg = /(09)(\d{9})$/;
        if( reg.test(tel) !== true ){
            return false; 
        }
        return tel;
    }
    ret.address = address;
    return ret;
})
.filter('parsePhone', function(funcs){
    return funcs.parsePhone;
})
.factory('server', function($http){
	var address = 'http://127.0.0.1:3002';
    //$http.defaults.headers.common['SESSION'] = session;
    var server = $http;
    server.address = address;
    
	return {
        address: address,
		post: function(url, data){
            data = typeof data == 'undefined'? {}: data;
			return $http.post(address+url+'?'+sidQuery, data, {
                //transformRequest: angular.identity//,
                //headers: {'Content-Type': undefined}
            });
		},
        file: function(url, data){
            var dt = new FormData();
            data = typeof data == 'undefined'? {}: data;
            for( var i in data ){
                dt.append(i, data[i]);
            }
			return $http.post(address+url+'?'+sidQuery, dt, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        },
		get: function(url){
            return $http.get(address+url+'?'+sidQuery);
		}
	}
});