const db = require('./modules/db');
const log = console.log;


/*
db.createUser( {
	password: 'qazwsx',
	mobile: '00989125529011',
	alias: 'Hamed Gholami'
}, log );
*/
db.follow( {
	follower: 1,
	following: 2
}, (err)=>{
	
});

db.fetchUsers( log );