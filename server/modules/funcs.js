const mysql = require('mysql');
const qc = require('query-creator');
const fs = require('fs');
const jimp = require('jimp')
const config = require('../config.json');
const db = mysql.createConnection(config.mysql);

const level = require('level-browserify');
const levelgraph = require('levelgraph');
const levelDb = levelgraph(level(config.levelDb));



db.connect();

module.exports.db = db;
module.exports.levelDb = levelDb;

/*
    Utility
*/
module.exports.errors = (code = 99) => {
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
module.exports.mysqlDate = function(dt) {
    function pad(n) {
        return n < 10 ? '0' + n : n
    }
    return dt.getFullYear() + "-" + pad(1 + dt.getMonth()) + "-" + pad(dt.getDate()) + " " + pad(dt.getHours()) + ":" + pad(dt.getMinutes()) + ":" + pad(dt.getSeconds());
};
module.exports.checkExists = function(file, type) {
    type = typeof type != 'string' ? 'file' : type;
    type = ['dir', 'file'].indexOf(type) === -1 ? 'file' : type;
    var func = {
        file: 'isFile',
        dir: 'isDirectory'
    }
    try {
        return fs.statSync(file)[func[type]]();
    } catch (err) {
        return false;
    }
}
module.exports.parsePhone = function(tel) {
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
module.exports.uniqueName = function() {
    let sid = '';
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 5; i++) {
        sid += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    sid += '' + Date.now();
    return sid;
}
module.exports.b64toFile = function(b64, path) {
    return new Promise((resolve, reject) => {
        let temp = `./tmp/${module.exports.uniqueName()}`;
        b64 = b64.replace(/^data:image\/jpg;base64,/, "");
        fs.writeFile(temp, b64, 'base64', function(err) {
            jimp.read(temp).then((lenna) => {
                lenna.resize(600, jimp.AUTO) // resize
                    .quality(50) // set JPEG quality 
                    .write(path, () => {
                        fs.unlinkSync(temp);
                        resolve(true);
                    }); // save 
            }).catch((errj) => {
                fs.unlinkSync(temp);
                reject(errj.code);
            });
        });

    });
}
module.exports.query = {};
module.exports.query.trustedLvlFollowing = (id, lvl) => {
    return qc.new()
        .select('following', 'followers')
        .where('follower = ? AND follow = 1 AND trust >= ?', [id, lvl]);
}
module.exports.query.trustedLvl = (id, lvl) => {
    return qc.new()
        .select('following', 'followers')
        .where('follower = ? AND trust >= ?', [id, lvl]);
}
module.exports.query.following = (id) => {
    return qc.new()
        .select('following', 'followers')
        .where('follower = ? AND follow = 1', [id]);
}
module.exports.query.timelineList = (id, trust) => {
    let fof = qc.new()
        .select('following', 'followers')
        .where(`follower = ${id} AND follow = 1 AND trust >= ${trust}`)
        .groupBy('following').val(false);
    return qc.new()
        .select('following', 'followers')
        .where(`(follower = ${id} AND follow = 1) OR (follower != ${id} AND follower IN(${fof}) AND trust >= ${trust})`)
        .groupBy('following');
}


module.exports.connectedList = (id, trust = false) => {
    return new Promise((resolve, reject) => {
        let query = qc.new()
            .select('following AS user, trust', 'followers')
            .where('follower = ? AND follow = 1 AND trust >= ? AND follower != following', [id, (trust ? 1 : -1)]).val();
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.getNetworkList = (id, outputType = 0 /* 0: as network, 1 just as list, 2 as list with detail*/ , maxLevel = 5) => {
    return new Promise((resolve, reject) => {
        let ret = [];
        let ret1 = [];

        ret.length = maxLevel - 1;
        let lvl = 0;


        let jobz = [];
        let doed = [];
        let find = (user) => {
            return jobz.indexOf(user) === -1 ? false : true;
        }

        let trusts = {};


        let retSuggest = [];
        let getSuggest = (user, list = []) => {
            for (let i = 0; i < list.length; i++) {
                if (list[i].user == user) {
                    return list[i];
                } else {
                    if (list[i].suggests.length > 0) {
                        return getSuggest(user, list[i].suggests);
                    }
                }
            }
            return false;
        }
        retSuggest.push({
            user: id,
            trust: 5,
            suggests: []
        });


        let retTrust = [];
        let getTrust = (user) => {
            for (let i = 0; i < retTrust.length; i++) {
                if (retTrust[i].user == user) {
                    return retTrust[i];
                }
            }
            return false;
        }

        ret1.push(id);

        retTrust.push({
            user: id,
            trusts: [5]
        });

        let next = (user, level = 0, suggestedBy = id) => {
            if (!find(user) && level < maxLevel && (level == 0 || trusts[user] > 0)) {
                jobz.push(user);
                module.exports.connectedList(user, (level == 0 ? false : true)).then((list) => {
                    ret[level] = typeof ret[level] == 'undefined' ? [] : ret[level];
                    for (let i = 0; i < list.length; i++) {
                        if (!find(list[i].user)) {
                            ret[level].push({
                                by: user,
                                user: list[i].user,
                                trust: list[i].trust
                            });
                            getSuggest(user, retSuggest).suggests.push({
                                user: list[i].user,
                                trust: list[i].trust,
                                suggests: []
                            });

                            if (ret1.indexOf(list[i].user) === -1) {
                                ret1.push(list[i].user);
                            }
                            if (typeof trusts[list[i].user] == 'undefined') {
                                trusts[list[i].user] = [list[i].trust];
                            } else {
                                trusts[list[i].user].push(list[i].trust);
                            }
                            next(list[i].user, (level + 1), user);
                        }
                    }
                    doed.push(user);
                    if (doed.length == jobz.length) {
                        if (outputType == 0) {
                            resolve(ret);
                        } else if (outputType == 1) {
                            resolve(ret1);
                        } else if (outputType == 2) {
                            resolve(trusts);
                        } else if (outputType == 3) {
                            resolve(retSuggest);
                        }
                    }
                }).catch((err) => {
                    reject(err);
                });;
            }
        }
        next(id);
    });
}

module.exports.rebuildLevelDb = (cb = new Function()) => {
    let query = qc.new().select('*', 'followers')
        .where('follow = 1 && follower != following')
        .val();
    db.query(query, (err, result) => {
        let list = result.map((i) => {
            return {
                subject: i.follower,
                object: i.following,
                trust: i.trust
            }
        });
        levelDb.del({}, () => {
            levelDb.put(list, () => { cb(list) });
        });
    });
}
module.exports.getNetwork = (user, maxLevel = 5) => {
    let getLevel = (user, level) => {
        return new Promise((resolve, reject) => {
            let search = [];
            for (let i = 0; i < level; i++) {
                search.push({
                    subject: levelDb.v(i),
                    object: levelDb.v((i + 1))
                });
            }
            search[0].filter = obj => obj.subject == user && !(level > 1 && obj.trust < 1);
            levelDb.search(search, (error, results) => {
                resolve(Object.keys(results).map(i =>
                    Object.keys(results[i]).map(j =>
                        results[i][j]
                    )
                ));
            });
        });
    }
    return new Promise((resolve, reject) => {
        let ret = [];
        let getLevels = function(i = 1) {
            if (i > maxLevel) {
                resolve(ret);
            } else {
                getLevel(user, i).then((lvlX) => {
                    ret = ret.concat(lvlX);
                    getLevels(i + 1);
                });
            }
        }
        getLevels(1);

    });
}

module.exports.fetchTimeline = (id = 1, page = 1, cb = new Function()) => {
    let limit = 8;
    let limitStart = limit * page - limit;
    // liste kasayi ke man hade aghal 2 ta beheshun etemad daram va donbaleshun kardam
    let myTimelineList = module.exports.query.timelineList(id, 3).val(false);

    let query = qc.new().select([
            '*'
        ], 'sales')
        .where(`user IN( ${myTimelineList})`)
        .groupBy('id')
        .orderBy('date', 'desc')
        .limit(limitStart, limit)
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchSales = (id = 1, page = 1, cb = new Function()) => {
    let limit = 8;
    let limitStart = limit * page - limit;

    let query = qc.new().select('s.*', 'sales s')
        .where('s.user = ?', [id])
        .orderBy('s.date', 'desc')
        .limit(limitStart, limit)
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.searchSales = (data = {}, page = 1, cb = new Function()) => {
    let where = '';
    let and = '';
    if (data.user) {
        where += `${and} user = '${data.user}'`;
        and = 'AND';
    }

    let limit = 8;
    let limitStart = limit * page - limit;

    let query = qc.new().select('*', 'sales')
        .where(where)
        .orderBy('date', 'desc')
        .limit(limitStart, limit)
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchSale = (id = 1, me = 0, cb = new Function()) => {
    let Oldquery = qc.new().select([
                't1.*',
                'COUNT(fa.id) AS i_favorite'
            ], '(' +
            qc.new().select([
                    't1.*',
                    'COUNT(fa.id) AS favorites_count'
                ], '(' +
                qc.new().select([
                        't1.*',
                        'COUNT(c.id) AS i_comment'
                    ], '(' +
                    qc.new().select([
                            't1.*',
                            'COUNT(c.id) AS comments_count'
                        ], '(' +
                        qc.new().select([
                            's.*',
                            'u.alias AS user_alias'
                        ], 'sales s')
                        .innerJoin('users u', 's.user = u.id')
                        .where(`s.id = ${id}`)
                        .groupBy('s.id').val(false) + ') t1')
                    .leftJoin('comments c', 'c.sale = t1.id')
                    .groupBy('t1.id').val(false) + ') t1')
                .leftJoin('comments c', `c.sale = t1.id AND c.user = ${me}`)
                .groupBy('t1.id').val(false) + ') t1')
            .leftJoin('favorites fa', 'fa.sale = t1.id')
            .groupBy('t1.id').val(false) + ') t1')
        .leftJoin('favorites fa', `fa.sale = t1.id AND fa.user = ${me}`)
        .groupBy('t1.id')
        .val();
    let myTrustList = module.exports.query.trustedLvl(me, 3).val(false);

    let query = qc.new().select([
                'q1.*',
                'SUM( IF( f.follower != q1.user, f.trust, 0 ) ) AS trust_sum'
            ], '(' + qc.new().select([
                    't1.*',
                    'COUNT(fa.id) AS i_favorite'
                ], '(' +
                qc.new().select([
                        't1.*',
                        'COUNT(fa.id) AS favorites_count'
                    ], '(' +
                    qc.new().select([
                            't1.*',
                            'COUNT(c.id) AS i_comment'
                        ], '(' +
                        qc.new().select([
                                't1.*',
                                'COUNT(c.id) AS comments_count'
                            ], '(' +
                            qc.new().select([
                                's.*',
                                'u.alias AS user_alias'
                            ], 'sales s')
                            .innerJoin('users u', 's.user = u.id')
                            .where(`s.id = ${id}`)
                            .groupBy('s.id').val(false) + ') t1')
                        .leftJoin('comments c', 'c.sale = t1.id')
                        .groupBy('t1.id').val(false) + ') t1')
                    .leftJoin('comments c', `c.sale = t1.id AND c.user = ${me}`)
                    .groupBy('t1.id').val(false) + ') t1')
                .leftJoin('favorites fa', 'fa.sale = t1.id')
                .groupBy('t1.id').val(false) + ') t1')
            .leftJoin('favorites fa', `fa.sale = t1.id AND fa.user = ${me}`)
            .groupBy('t1.id').val(false) + ') q1')
        .leftJoin('followers f', `f.following = q1.user AND f.follower IN (${myTrustList}) AND f.trust > -1`) // following haye ghabele etemade man ke in adam ro donbal kardan
        .groupBy('q1.id')
        .val();

    fs.writeFileSync('query.sql', query);
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result[0] : false);
    });
}
module.exports.newSale = (data = {}, cb = new Function()) => {
    let query = qc.new().insert('sales', data).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.deleteSale = (id = 1, cb = new Function()) => {
    let query = qc.new().delete('sales').where('id = ?', [id]).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.getRelation = (user1 = 1, user2 = 2, cb = new Function()) => {
    let queryCheck = qc.new()
        .select('*', 'followers')
        .where('follower = ? AND following = ?', [user1, user2])
        .val();
    db.query(queryCheck, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck.length == 0) {
            cb(false, {
                follower: parseInt(user1),
                following: parseInt(user2),
                follow: 0,
                trust: 0
            });
        } else {
            cb(false, resultCheck[0]);
        }
    });
}
module.exports.setRelation = (user1 = 1, user2 = 2, relation = {}, cb = new Function()) => {
    module.exports.getRelation(user1, user2, (err, result) => {
        let query = qc.new().replace('followers',
            Object.assign(result, relation)
        ).val();
        db.query(query, (err, result) => {
            cb(err ? err : false, result ? result : false);
        });
    });
}


module.exports.checkFollow = (follower = 1, following = 2, cb = new Function()) => {
    let queryCheck = qc.new().select('following', 'followers').where('follower = ? AND following = ? AND follow = 1', [follower, following]).val();
    db.query(queryCheck, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck.length == 0) {
            cb(false, false);
        } else {
            cb(false, true);
        }
    });
}
module.exports.follow = (follower = 1, following = 2, cb = new Function()) => {
    module.exports.checkFollow(follower, following, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck == false) {
            let query = qc.new().insert('followers', {
                follower: follower,
                following: following,
                follow: 1
            }).val();
            db.query(query, (err, result) => {
                cb(err ? err : false, result ? result : false);
            });
        } else {
            cb(true, false);
        }
    });
}
module.exports.unfollow = (follower = 1, following = 2, cb = new Function()) => {
    module.exports.checkFollow(follower, following, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck == true) {
            let query = qc.new().delete('followers').where('follower = ? AND following = ?', [follower, following]).val();
            db.query(query, (err, result) => {
                cb(err ? err : false, result ? result : false);
            });
        } else {
            cb(true, false);
        }
    });
}

/*
    Users
*/
module.exports.fetchUsers = (cb = new Function()) => {
    let query = qc.new().select([
        'id', 'mobile', 'alias'
    ], 'users').val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchUser = (by = 'id', data = {}, me = null, cb = new Function()) => {
    let where = '';
    where = `t1.${by} = "${data.username}" `
    if (data.password) {
        where += `AND t1.password = "${data.password}"`;
    }


    let queryIn = qc.new().select([
            't1.id',
            't1.mobile',
            't1.alias',
            'SUM( IF(t2.follower = t1.id AND t2.follow = 1, 1, 0 ) ) AS following',
            `SUM( IF(t2.follower = t1.id AND t2.trust >= 3 AND t2.following != ${me}, 1, 0 ) ) AS trusts`,
            'SUM( IF(t2.following = t1.id AND t2.follow = 1, 1, 0 ) ) AS followers',
            `SUM( IF(t2.following = t1.id AND t2.follower = ${me}, 1, 0 ) ) AS i_follow`
        ], 'users t1')
        .leftJoin('followers t2', '(t1.id = t2.follower OR t1.id = t2.following) ')
        .where(where)
        .groupBy('t1.id')
        .val(false);
    let query = qc.new().select([
            'q1.*',
            'COUNT(*) AS sales_count'
        ], `(${queryIn}) q1`)
        .leftJoin('sales s', 'q1.id = s.user')
        .groupBy('q1.id')
        .val();

    db.query(query, (err, result) => {
        cb(err || result.length == 0 ? true : false, !err && result.length == 1 ? result[0] : false);
    });
}

module.exports.newUser = (data = {}, cb = new Function()) => {
    let query = qc.new().insert('users', data).val();
    db.query(query, (err, result) => {
        module.exports.follow(result.insertId, result.insertId, (err2, result2) => {
            cb(err ? err : false, !err ? result.insertId : false);
        });
    });
}
module.exports.editUser = (id = 1, data = {}, cb = new Function()) => {
    let query = qc.new().update('users', data).where('id = ?', [id]).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}



module.exports.checkComment = (user = 1, sale = 1, cb = new Function()) => {
    let queryCheck = qc.new().select(['id', 'date'], 'comments').where('user = ? AND sale = ?', [user, sale]).val();
    db.query(queryCheck, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck.length == 0) {
            cb(false, false);
        } else {
            cb(false, true);
        }
    });
}
module.exports.checkFavorite = (user = 1, sale = 1, cb = new Function()) => {
    let queryCheck = qc.new().select('id', 'favorites').where('user = ? AND sale = ?', [user, sale]).val();
    db.query(queryCheck, (errCheck, resultCheck) => {
        if (!errCheck && resultCheck.length == 0) {
            cb(false, false);
        } else {
            cb(false, true);
        }
    });
}
module.exports.fetchComments = (id = 1, cb = new Function()) => {
    let query = qc.new().select([
            't1.*',
            't2.alias AS user_alias'
        ], 'comments t1')
        .leftJoin('`users` t2', 't1.`user` = t2.id')
        .where('t1.sale = ?', [id])
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchFavorites = (id = 1, cb = new Function()) => {
    let query = qc.new().select([
            't1.*',
            't2.alias AS user_alias'
        ], 'facorites t1')
        .leftJoin('`users` t2', 't1.`user` = t2.id')
        .where('t1.sale = ?', [id])
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.newComment = (user = 1, sale = 1, body = '', cb = new Function()) => {
    let query = qc.new().insert('comments', {
        user: user,
        sale: sale,
        body: body
    }).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.newFavorite = (user = 1, sale = 1, cb = new Function()) => {
    let query = qc.new().insert('favorites', {
        user: user,
        sale: sale
    }).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.deleteFavorite = (user = 1, sale = 1, cb = new Function()) => {
    let query = qc.new().delete('favorites')
        .where('user = ? AND sale = ?', [user, sale])
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
const fetchFollow = (type = 'ers', id = 1, cb = new Function()) => {
    if (['ers', 'ing'].indexOf(type) == -1) {
        cb(true, false);
    }
    let field = type == 'ers' ? 'follower' : 'following';
    let field2 = type == 'ing' ? 'follower' : 'following';

    let query = qc.new().select([
            't2.id', 't2.mobile', 't2.alias'
        ], 'followers t1')
        .innerJoin('users t2', `t1.${field} = t2.id`)
        .where(`t1.${field2} = ${id} AND t1.follow = 1`).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchTrusts = (id = 1, trustlvl = 3, cb = new Function()) => {
    let query = qc.new().select([
            't2.id', 't2.mobile', 't2.alias', 't1.trust'
        ], 'followers t1')
        .innerJoin('users t2', `t1.following = t2.id`)
        .where(`t1.follower = ${id} AND t1.trust >= ${trustlvl} AND t1.follower != t1.following`)
        .orderBy('trust', 'desc')
        .val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result : false);
    });
}
module.exports.fetchFollowers = (id = 1, cb = new Function()) => {
    fetchFollow('ers', id, cb);
}
module.exports.fetchFollowing = (id = 1, cb = new Function()) => {
    fetchFollow('ing', id, cb);
}






module.exports.fetchCategories = (cb = new Function()) => {
    cb(false, [{
        id: 1,
        name: 'cars',
        alias: 'وسائل نقلیه'
    }, {
        id: 2,
        name: 'houses',
        alias: 'خانه'
    }, {
        id: 3,
        name: 'computers',
        alias: 'کامپیوتر'
    }]);
}

/*
    Insert
*/

module.exports.insertUser = (obj = {}, cb = new Function()) => {
    let query = qc.new().insert('users', obj).val();
    db.query(query, (err, result) => {
        cb(err ? err : false, result ? result.insertId : false);
    });
}