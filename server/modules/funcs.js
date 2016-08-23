const mysql = require('mysql');
const qc = require('query-creator');
const fs = require('fs');
const db = mysql.createConnection(require(`../mysqlConfig.json`));
db.connect();

module.exports.db = db;

/*
    Utility
*/
module.exports.errors = (code = 99)=>{
    let errs = {
        99: 'App Error',
        100: 'App does not started yet',
        101: 'You need to login first',
        102: 'You need to logout first',
        103: 'Username or Password are wrong',
        104: 'Content Error',
        105: 'File not sent',
        106: 'Data Error'
    }
    return errs[code];
}
module.exports.mysqlDate = function (dt) {
    function pad(n) { return n < 10 ? '0' + n : n }
    return dt.getFullYear() + "-" + pad(1 + dt.getMonth()) + "-" + pad(dt.getDate()) + " " + pad(dt.getHours()) + ":" + pad(dt.getMinutes()) + ":" + pad(dt.getSeconds());
};
module.exports.checkExists = function(file, type){
	type = typeof type != 'string'? 'file': type;
	type = ['dir','file'].indexOf( type ) === -1? 'file': type;
	var func = {
		file: 'isFile',
		dir: 'isDirectory'
	}
	try{
		return fs.statSync(file)[ func[type] ]();
	}
	catch (err)
	{
		return false;
	}
}
module.exports.parsePhone = function(tel){
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
module.exports.uniqueName = function(){
    let sid = '';
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for( let i=0; i < 5; i++ ){
        sid += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    sid += '' + Date.now();
    return sid;
}
/*
    Users
*/
module.exports.fetchUsers = (cb = new Function())=>{
    let query = qc.new().select([
        'id', 'mobile', 'alias'
    ], 'users').val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.fetchUser = (by = 'id', data = {}, cb = new Function())=>{
    let where = '';
    where = `t1.${by} = "${data.username}" `
    if( data.password ){
        where+= `AND t1.password = "${data.password}"`;
    }


    let query = qc.new().select([
        't1.id',
        't1.mobile',
        't1.alias',
        'SUM( IF(t2.follower = t1.id, 1, 0 ) ) AS following',
        'SUM( IF(t2.following = t1.id, 1, 0 ) ) AS followers'
    ], 'users t1')
    .leftJoin('followers t2', 't1.id = t2.follower OR t1.id = t2.following')
    .where( where )
    .groupBy('t1.id')
    .val();
    db.query( query, (err, result)=>{
        cb( err || result.length == 0? true: false, !err && result.length == 1? result[0]: false );
    });
}

module.exports.newUser = (data = {}, cb = new Function())=>{
    let query = qc.new().insert('users', data).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, !err? result.insertId: false );
    });
}
module.exports.editUser = (id = 1, data = {}, cb = new Function())=>{
    let query = qc.new().update('users', data).where('id = ?', [id]).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}

module.exports.fetchTimeline = (id = 1, page = 1, cb = new Function())=>{
    let limit = 8;
    let limitStart = limit * page - limit;

    let query = qc.new().select([
        't1.*',
        't3.alias AS user_alias'
    ], 'sales t1')
    .leftJoin('followers t2', 't1.`user` = `t2`.`following`')
    .leftJoin('`users` t3', 't1.`user` = t3.id')
    .where('t2.follower = ? OR t1.`user` = ?', [id,id])
    .groupBy('t1.id')
    .orderBy('t1.date','desc')
    .limit(limitStart, limit)
    .val();

    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.fetchSales = (id = 1, page = 1, cb = new Function())=>{
    let limit = 8;
    let limitStart = limit * page - limit;

    let query = qc.new().select([
        't1.*',
        't2.alias AS user_alias'
    ], 'sales t1')
    .leftJoin('`users` t2', 't1.`user` = t2.id')
    .where('t1.`user` = ?', [id])
    .orderBy('t1.date','desc')
    .limit(limitStart, limit)
    .val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.fetchSale = (id = 1, cb = new Function())=>{
    let query = qc.new().select([
        't1.*',
        't2.alias AS user_alias'
    ], 'sales t1')
    .leftJoin('`users` t2', 't1.`user` = t2.id')
    .where( 't1.id = ?', [id] )
    .val();
    db.query( query, (err, result)=>{
       cb( err? err: false, result? result[0]: false );
    });
}
module.exports.newSale = (data = {}, cb = new Function())=>{
    let query = qc.new().insert('sales', data).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.deleteSale = (id = 1, cb = new Function())=>{
    let query = qc.new().delete('sales').where('id = ?', [id]).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.checkFollow = (follower = 1, following = 2, cb = new Function())=>{
    let queryCheck = qc.new().select('following', 'followers').where('follower = ? AND following = ?', [follower, following]).val();
    db.query( queryCheck, (errCheck, resultCheck)=>{
        if( !errCheck && resultCheck.length == 0 ){
            cb( false, false );
        }
        else{
            cb( false, true );
        }
    });
}
module.exports.follow = (follower = 1, following = 2, cb = new Function())=>{
    module.exports.checkFollow( follower, following, (errCheck, resultCheck)=>{
        if( !errCheck && resultCheck == false ){
            let query = qc.new().insert('followers', {
                follower: follower,
                following: following
            }).val();
            db.query( query, (err, result)=>{
                cb( err? err: false, result? result: false );
            });
        }
        else{
            cb( true, false );
        }
    });
}
module.exports.unfollow = (follower = 1, following = 2, cb = new Function())=>{
    module.exports.checkFollow( follower, following, (errCheck, resultCheck)=>{
        if( !errCheck && resultCheck == true ){
            let query = qc.new().delete('followers').where('follower = ? AND following = ?', [follower, following]).val();
            db.query( query, (err, result)=>{
                cb( err? err: false, result? result: false );
            });
        }
        else{
            cb( true, false );
        }
    });
}



module.exports.checkComment = (user = 1, sale = 1, cb = new Function())=>{
    let queryCheck = qc.new().select('date', 'comments').where('user = ? AND sale = ?', [user, sale]).val();
    db.query( queryCheck, (errCheck, resultCheck)=>{
        if( !errCheck && resultCheck.length == 0 ){
            cb( false, false );
        }
        else{
            cb( false, true );
        }
    });
}
module.exports.fetchComments = (id = 1, cb = new Function())=>{
    let query = qc.new().select([
        't1.*',
        't2.alias AS user_alias'
    ], 'comments t1')
    .leftJoin('`users` t2', 't1.`user` = t2.id')
    .where( 't1.sale = ?', [id] )
    .val();
    db.query( query, (err, result)=>{
       cb( err? err: false, result? result: false );
    });
}
module.exports.newComment = (user = 1, sale = 1, body = '', cb = new Function())=>{
    let query = qc.new().insert('comments', {
        user: user,
        sale: sale,
        body: body
    }).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}

const fetchFollow = (type='ers', id = 1, cb = new Function())=>{
    if( ['ers','ing'].indexOf(type) == -1 ){
        cb( true, false);
    }
    let field = type == 'ers'? 'follower': 'following';
    let field2 = type == 'ing'? 'follower': 'following';

    let query = qc.new().select([
        't2.id', 't2.mobile', 't2.alias'
    ], 'followers t1')
    .innerJoin('users t2', `t1.${field} = t2.id`)
    .where(`t1.${field2} = ?`, [id]).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result: false );
    });
}
module.exports.fetchFollowers = (id = 1, cb = new Function())=>{
    fetchFollow('ers', id, cb);
}
module.exports.fetchFollowing = (id = 1, cb = new Function())=>{
    fetchFollow('ing', id, cb);
}






module.exports.fetchCategories = (cb = new Function())=>{
    cb( false, [
        {
            id: 1,
            name: 'cars',
            alias: 'وسائل نقلیه'
        },
        {
            id: 2,
            name: 'houses',
            alias: 'خانه'
        },
        {
            id: 3,
            name: 'computers',
            alias: 'کامپیوتر'
        }
    ] );
}

/*
    Insert
*/

module.exports.insertUser = (obj = {}, cb = new Function())=>{
    let query = qc.new().insert('users', obj).val();
    db.query( query, (err, result)=>{
        cb( err? err: false, result? result.insertId: false );
    });
}