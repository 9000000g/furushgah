const mysql = require('mysql');
const qc = require('query-creator');
const db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'nai',
    password : '1qaz@WSX',
    database : 'furushgah'
});
db.connect();

module.exports.db = db;


/*
    Fetch
*/

module.exports.fetchUsers = (cb = new Function())=>{
    let query = qc.new().select('*', 'users').val();
    db.query( query, (err, result)=>{
        cb( err || false, result || false );
    });
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
        cb( err || false, result.insertId || false );
    });
}

module.exports.follow = (obj = {}, cb = new Function())=>{
    let queryGet = qc.new().select('*', 'followers')
    .where('follower = ? AND following = ?', [obj.follower, obj.following]).val();
    db.query( queryGet, (err, result)=>{
        if( err ){
            cb( err, false );
        }
        else{
            if( result.length == 0 ){
                let query = qc.new().insert('followers', obj).val();
                db.query( query, (err2, result2)=>{
                    cb( err2 || false, true );
                });
            }
            else{
                cb( true, false );
            }
        }
    });
    
}