const app = require('express')();
const fs = require('fs');
const http = require('http').Server(app).listen(3001);
const io = require('socket.io')(http);
const ss = require('socket.io-stream');
const funcs = require('./modules/funcs');
const log = console.log;
const sess = require('socketio-mysql-session')( funcs.db );
io.use(sess);

let me = false;
io.on('connection', (socket)=>{
	let session = socket.handshake.session;
	let sssocket = ss(socket);
	session.me = typeof session.me == 'undefined'? false: session.me;

	socket.on('login', (data={},cb=new Function())=>{
		try{
			if( session.me !== false ){
				cb( true, 102 );
				return;
			}
			else{
				if( !data.username || !data.password ){
					cb( true, 104 );
					return;
				}
				let by = data.username.length < 9? 'id': 'mobile';
				funcs.fetchUser( by, data, (err, result)=>{
					session.me = result;
					cb( err, result );
				});
			}
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('logout', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			else{
				session.me = false;
				cb( false, true);
			}
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('timeline', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			let id = session.me.id;
			funcs.fetchTimeline( id, (err, result)=>{
				cb( false, result );
			});
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			if( data.id == 'me' ) {
				if( session.me == false ){
					cb( false, false );
					return;
				}
				id = session.me.id;
			}
			funcs.fetchUser( 'id', {username: id}, (err, result)=>{
				cb( false, result );
			});
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/new', (data={},cb=new Function())=>{
		try{
			if( !data.alias || !data.mobile || !data.password ){
				cb( true, 106 );
				return;
			}
			funcs.newUser( data, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id/followers', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			if( data.id == 'me' ) {
				id = session.me.id;
			}
			funcs.fetchFollowers( id, (err, result)=>{
				cb( false, result );
			});
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}

	});
	socket.on('users/:id/following', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			if( data.id == 'me' ) {
				id = session.me.id;
			}
			funcs.fetchFollowing( id, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id/sales', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			if( data.id == 'me' ) {
				id = session.me.id;
			}
			funcs.fetchSales( id, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id/checkFollow', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let follower = session.me.id;
			let following = data.id;
			funcs.checkFollow( follower, following, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id/follow', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let follower = session.me.id;
			let following = data.id;
			funcs.follow( follower, following, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('users/:id/unfollow', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let follower = session.me.id;
			let following = data.id;
			funcs.unfollow( follower, following, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	sssocket.on('sales/new', (stream={}, data={}, cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}

			data.user = session.me.id;
			data.date = funcs.mysqlDate( new Date() );
			funcs.newSale( data, (err, result)=>{
				// row created, lets go to upload file
				let address = `${__dirname}/uploads/thumb-${result.insertId}.jpg`;
				stream.pipe( fs.createWriteStream(address) );
				stream.on('end', ()=>{
					cb( false, result );
				});
				stream.on('error', function(){
					funcs.deleteSale( result.insertId, (err, result2)=>{
						cb( true, 105 );
					});
				});
				
			});
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('sales/:id', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			funcs.fetchSale( id, (err, result)=>{
				let address = `${__dirname}/uploads/thumb-${id}.jpg`;
				cb(false, result);
			})
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('sales/:id/delete', (data={},cb=new Function())=>{
		try{
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			let id = data.id;
			funcs.fetchSale( id, (err2, result)=>{
				if( result.user != session.me.id ){
					cb( true, 101 );
					return;
				}
				let address = `${__dirname}/uploads/thumb-${id}.jpg`;
				fs.stat(address, function(err2, stat) {
					if( !err2 ){
						fs.unlinkSync(address);
					}
					funcs.deleteSale( id, cb);
				});
				

			})
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('sales/:id/checkComment', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			funcs.checkComment( session.me.id, data.id, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('sales/:id/comments', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			funcs.fetchComments( data.id, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
	socket.on('sales/:id/comments/new', (data={},cb=new Function())=>{
		try{
			if( !data.id ){
				cb( true, 106 );
				return;
			}
			if( session.me === false ){
				cb( true, 101 );
				return;
			}
			funcs.newComment( session.me.id, data.id, data.body, cb);
		}
		catch(err){
			console.log(err);
			cb(true, err);
		}
	});
});


app.get('/sales/:id/thumbnail.jpg', (req, res)=>{
	let path = `${__dirname}/uploads`;
	let file = `${path}/thumb-${req.params.id}.jpg`;
	fs.exists( file, (exists)=>{
		res.sendFile( exists? file: `${path}/thumb-default.jpg` );
	} )
});

/*



io
.get('/post', (req, res)=>{
	funcs.writeJson( res, req );
})
.get('/users', (req, res)=>{
	funcs.fetchUsers( (err, result)=>{
		funcs.writeJson( res, result );
	});
})
.get('/users/:id', (req, res)=>{
	let id = parseInt( req.params.id );
	funcs.fetchUser( id, (err, result)=>{
		funcs.writeJson( res, result );
	});
})
.get('/users/:id/followers', (req, res)=>{
	let id = parseInt( req.params.id );
	funcs.fetchFollowers( id, (err, result)=>{
		funcs.writeJson( res, result );
	});
})
.get('/users/:id/following', (req, res)=>{
	let id = parseInt( req.params.id );
	funcs.fetchFollowing( id, (err, result)=>{
		funcs.writeJson( res, result );
	});
})

io.post('/asd', (req, res)=>{
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

sd/sdf*
funcs.follow( {
	follower: 1,
	following: 2
}, (err)=>{
	
});

funcs.fetchUsers( log );
*/