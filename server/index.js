const app = require('express')();
const cors = require('cors-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
//const http = require('http').Server(app).listen(3001);
//const io = require('socket.io')(http);
//const ss = require('socket.io-stream');
const multer  = require('multer');
const upload = multer({ dest: `${__dirname}/tmp/` });
const gm = require('gm')
const glob = require("glob");
const ses = require('se-session');
const funcs = require('./modules/funcs');
const log = console.log;
//io.use(ses.io());
app.use(ses.express({required: false}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3002);
let me = false;


app.use( function(req,res,next){
	if( typeof req.session != 'object' ){
		req.session = null;
	}
	else{
		let session = req.session;
		session.me = typeof session.me == 'undefined'? false: session.me;
	}
	next();
});
app.post('/file', upload.single('file'), (req,res)=>{
	let newPath = `${__dirname}/uploads/${funcs.uniqueName()}.jpg`;
	//console.log(req.file);
	res.json({ error: true, result: req.file.path });

});
app.get('/file/:name', (req,res)=>{
	let basedir = `${__dirname}/uploads`;
	let file = `${basedir}/${req.params.name}`;
	if( !funcs.checkExists( file, 'file') ){
		file = `${basedir}/thumb-default.jpg`;
	}
	let content = fs.readFileSync(  file );
	res.writeHead(200, {'Content-Type': 'image/jpg' });
	res.end(content, 'file');
});
app.post('/login', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me !== false ){
		res.json({ error: true, result: 'Logout First!' });
		return;
	}
	if( !req.body.username ||
		funcs.parsePhone( req.body.username ) === false ||
		!req.body.password ||
		req.body.password.length < 6
	){
		res.json({ error: true, result: 'Bad Data!' });
		return;
	}
	req.body.username = funcs.parsePhone( req.body.username );
	funcs.fetchUser( 'mobile', req.body, (err, result)=>{
		req.session.me = result;
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/logout', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	req.session.me = false;
	res.json({ error: false, result: true });
	return;
});
app.get('/timeline/:page?', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	let page = req.params.page? req.params.page: 1;
	setTimeout( function(){
		funcs.fetchTimeline( req.session.me.id, page, (err, result)=>{
			res.json({ error: err, result: result });
			return;
		});
	}, 1000);
});
app.get('/users/:id', (req,res)=>{
	let id = req.params.id;
	if( id == 'me' ) {
		if( req.session == null ){
			res.json({ error: true, result: 'Session Error!' });
			return;
		}
		if( req.session.me === false ){
			res.json({ error: true, result: 'Login First!' });
			return;
		}
		id = req.session.me.id;	
	}
	funcs.fetchUser( 'id', {username: id}, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/users/new', (req,res)=>{
	if( !req.body.alias || !req.body.mobile || !req.body.password ){
		res.json({ error: true, result: 'Data Error!' });
		return;
	}
	funcs.newUser( req.body, (err,result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/users/:id/followers', (req,res)=>{
	let id = req.params.id;
	if( id == 'me' ) {
		if( req.session == null ){
			res.json({ error: true, result: 'Session Error!' });
			return;
		}
		if( req.session.me === false ){
			res.json({ error: true, result: 'Login First!' });
			return;
		}
		id = req.session.me.id;
	}
	funcs.fetchFollowers( id, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/users/:id/following', (req,res)=>{
	let id = req.params.id;
	if( id == 'me' ) {
		if( req.session == null ){
			res.json({ error: true, result: 'Session Error!' });
			return;
		}
		if( req.session.me === false ){
			res.json({ error: true, result: 'Login First!' });
			return;
		}
		id = req.session.me.id;
	}
	funcs.fetchFollowing( id, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/users/:id/sales/:page?', (req,res)=>{
	let id = req.params.id;
	if( id == 'me' ) {
		if( req.session == null ){
			res.json({ error: true, result: 'Session Error!' });
			return;
		}
		if( req.session.me === false ){
			res.json({ error: true, result: 'Login First!' });
			return;
		}
		id = req.session.me.id;
	}
	let page = req.params.page? req.params.page: 1;
	funcs.fetchSales( id, page, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/users/:id/checkFollow', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	let follower = req.session.me.id;
	let following = req.params.id;
	funcs.checkFollow( follower, following, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/users/:id/follow', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	let follower = req.session.me.id;
	let following = req.params.id;
	funcs.follow( follower, following, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/users/:id/unfollow', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	let follower = req.session.me.id;
	let following = req.params.id;
	funcs.unfollow( follower, following, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/sales/new', upload.single('thumbnail'), (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	if( !req.file ){
		res.json({ error: true, result: 'Upload Error!' });
		return;
	}
	//console.log(req.body);
	if( !req.body.title ){
		res.json({ error: true, result: 'Data Error!' });
		return;
	}
	req.body.user = req.session.me.id;
	req.body.date = funcs.mysqlDate( new Date() );

	
	
	

	funcs.newSale( req.body, (err,result)=>{
		// you should now upload the file
		
		let oldPath = req.file.path;
		let newPath = `${__dirname}/uploads/thumb-${result.insertId}.${path.extname(req.file.originalname)}`;
		fs.renameSync(oldPath, newPath);
		//let newPath = `${__dirname}/uploads/thumb-${result.insertId}.jpg`;
		//let writeStream = fs.createWriteStream(newPath);
		/*
		gm(req.file.path).setFormat("jpg").write(writeStream, function(error){
			console.log(error);
			
		});
		*/
		res.json({ error: err?true:false, result: err?err:result });
		return;
	});
});
app.get('/sales/:id', (req,res)=>{
	let id = req.params.id;
	funcs.fetchSale( id, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/sales/:id/delete', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	let id = req.params.id;
	funcs.fetchSale( id, (err, result)=>{
		if( result.user != req.session.me.id ){
			res.json({ error: true, result: 'Not Allowed!' });
			return;
		}
		let address = `${__dirname}/uploads/thumb-${id}.jpg`;
		if( funcs.checkExists( address, 'file' ) ){
			fs.unlinkSync(address);
		}
		funcs.deleteSale( id,  (err2, result2)=>{
			res.json({ error: err2, result: result2 });
			return;
		});
	});
});
app.get('/sales/:id/checkComment', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	funcs.checkComment( req.session.me.id, req.params.id, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/sales/:id/comments', (req,res)=>{
	funcs.fetchComments( req.params.id, (err, result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.post('/sales/:id/comments/new', (req,res)=>{
	if( req.session == null ){
		res.json({ error: true, result: 'Session Error!' });
		return;
	}
	if( req.session.me === false ){
		res.json({ error: true, result: 'Login First!' });
		return;
	}
	if( !req.body.body ){
		res.json({ error: true, result: 'Data Error!' });
		return;
	}
	funcs.newComment( req.session.me.id, req.params.id, req.body.body, (err,result)=>{
		res.json({ error: err, result: result });
		return;
	});
});
app.get('/sales/:id/thumbnail', (req, res)=>{
	let basedir = `${__dirname}/uploads`;
	let file = `${basedir}/thumb-${req.params.id}.*`;
	glob(file, function(err, files){
		if( files.length != 1 ){
			res.sendFile( `${basedir}/thumb-default.jpg` );
		}
		else{
			res.sendFile( files[0] );
		}
	});
});

app.get('/hi', (req, res)=>{
	res.json({ error: false, result: 'Hi Baby :-)' });
	return;
});
/*
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

*/


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