angular.module('app.services', ['btford.socket-io'])
.factory('$server', function(socketFactory) {
    var address = 'http://23.227.201.9:3001';
    var session = localStorage.getItem('session');
    if( !session ){
        session = '';
        var possible = '1234567890qwertyuiopasdfghjklzxcvbnm';
        var possibleLength = possible.length;
        for( var i = 0; i < 30; i++ ){
            session+= possible.charAt( Math.floor(Math.random() * possibleLength));
        }
        session += '_' + Date.now();
        localStorage.setItem('session', session);
    }
	var ret = socketFactory({
		ioSocket: io.connect(address, {query: 'session='+session})
	});
    ret.address = address;
    return ret;
})