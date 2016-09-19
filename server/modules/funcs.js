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
        console.log(temp);
        b64 = b64.replace(/^data:image\/jpg;base64,/, "");
        b64 = b64.replace(/^data:image\/png;base64,/, "");
        b64 = b64.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFile(temp, b64, 'base64', function(err) {
            jimp.read(temp).then((lenna) => {
                lenna.resize(600, jimp.AUTO) // resize
                    .quality(50) // set JPEG quality 
                    .write(path, () => {
                        fs.unlinkSync(temp);
                        resolve(true);
                    }); // save 
            }).catch((errj) => {
                console.log(errj);
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

module.exports.getNetworkList = (id, outputType = 2 /* 0: as network, 1 just as list, 2 as list with detail*/ , maxLevel = 5) => {
    return new Promise((resolve, reject) => {
        let ret = [];
        let ret1 = [];

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

        ret1.push(id);

        let next = (user, level = 0, suggestedBy = id) => {
            if (!find(user) && level < maxLevel && (level == 0 || trusts[user] > 0)) {
                jobz.push(user);
                module.exports.connectedList(user, (level == 0 ? false : true)).then((list) => {
                    for (let i = 0; i < list.length; i++) {
                        if (!find(list[i].user)) {
                            ret.push({
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

module.exports.getTrust = (id1, id2, detail = false, full = false) => {
    return new Promise((resolve, reject) => {
        if (id1 == id2) {
            resolve(
                detail ? {
                    direct: false,
                    value: 5
                } : 5
            );
        }
        let query = qc.new().select('trust', 'followers').where('follower = ? AND following = ? AND follow = 1', [id1, id2]).val();
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length == 1 && result[0].trust != -1) {
                    resolve(
                        detail ? {
                            direct: true,
                            value: result[0].trust
                        } : result[0].trust
                    );
                } else {
                    let network = [];
                    let direct = true;
                    let _getTrusts = (id, ful = false) => {
                        let list = [];
                        let listF = [];
                        let _ = (id_) => {
                            for (let i = 0; i < network.length; i++) {
                                if (network[i].user == id_) {
                                    list.push(network[i].trust);
                                    listF.push({
                                        user: id_,
                                        trust: network[i].trust
                                    });
                                    if (network[i].by != id1) {
                                        direct = false;
                                        _(network[i].by);
                                    }
                                }
                            }
                            return ful ? listF : list;
                        }
                        return _(id);
                    }

                    module.exports.getNetworkList(id1, 0).then((list) => {
                        network = list;
                        let trusts = _getTrusts(id2, full);
                        trusts = trusts.length == 0 ? [0] : trusts;
                        let ret = full ? trusts.reverse() : Math.min(...trusts);
                        ret = ret != null ? ret : 0;
                        if (full && detail) {
                            resolve({
                                direct: direct,
                                value: ret
                            });
                        } else if (detail) {
                            resolve({
                                direct: direct,
                                value: ret
                            });
                        } else {
                            resolve(ret);
                        }

                    });
                }
            }
        });
    });
}

module.exports.getNetwork = (id1, id2) => {
    let ret = [];
    ret.push(id1);
    return new Promise((resolve, reject) => {
        if (id1 == id2) {
            resolve(
                detail ? {
                    direct: false,
                    value: 5
                } : 5
            );
        }
        let network = [];
        let _getTrusts = (id) => {
            let list = [];
            let _ = (id_) => {
                for (let i = 0; i < network.length; i++) {
                    if (network[i].user == id_) {
                        list.push(network[i].user);
                        if (network[i].by != id1) {
                            _(network[i].by);
                        }
                    }
                }
                return list;
            }
            return _(id);
        }

        module.exports.getNetworkList(id1, 0).then((list) => {
            network = list;
            let trusts = _getTrusts(id2);
            trusts = trusts.length == 0 ? [0] : trusts;
            let ret = Math.min(...trusts);
            ret = ret != null ? ret : 0;
            resolve(
                detail ? {
                    direct: direct,
                    value: ret
                } : ret
            );
        });
    });
}


module.exports.fetchTimeline = (id = 1, page = 1) => {
    return new Promise((resolve, reject) => {
        let limit = 8;
        let limitStart = limit * page - limit;
        // liste kasayi ke man hade aghal 2 ta beheshun etemad daram va donbaleshun kardam
        module.exports.getNetworkList(id, 1).then((myTimelineList) => {
            let query = qc.new().select([
                    '*'
                ], 'sales')
                .where(`user IN( ${myTimelineList.join()} )`)
                .groupBy('id')
                .orderBy('date', 'desc')
                .limit(limitStart, limit)
                .val();
            db.query(query, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });


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
module.exports.searchSales = (data = {}, me = 1, page = 1, cb = new Function()) => {
    return new Promise((resolve, reject) => {


        let limit = 8;
        let limitStart = limit * page - limit;
        let where = 'TRUE';
        let startQuery = (where) => {
            let query = qc.new().select('*', 'sales')
                .where(where)
                .orderBy('date', 'desc')
                .limit(limitStart, limit)
                .val();
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }


        if (data.user && data.text != ':user') {
            where += ` AND user = '${data.user}'`;
        }
        if (data.text && data.text != ':text') {
            where += ` AND (title LIKE '%${data.text.split(' ').join('%')}%' OR body LIKE '%${data.text.split(' ').join('%')}%')`;
        }
        if (data.timeline == true) {
            module.exports.getNetworkList(me, 1, 1).then((myTimelineList) => {
                where += ` AND user IN(${myTimelineList.join()})`;
                startQuery(where);
            });
        } else {
            startQuery(where);
        }


    });
}
module.exports.fetchSale = (id = 1, me = 0, getDetail = true) => {
    let query;
    if (getDetail) {
        query = qc.new().select([
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
    } else {
        query = qc.new().select('*', 'sales')
            .where(`id = ${id}`)
            .val();
    }
    //fs.writeFileSync('query.sql', query);
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (result.length == 0 || err) {
                resolve({});
                return;
            }
            let sale = result[0];
            if (!getDetail) {
                resolve(sale);
            } else {
                module.exports.getTrust(me, sale.user, true).then((trust) => {
                    sale.trust_direct = trust.direct;
                    sale.trust = trust.value;
                    resolve(sale);
                });
            }

        });
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
        let user = !err && result.length == 1 ? result[0] : false;
        if (me && user) {
            module.exports.getTrust(me, user.id, true, true).then((trust) => {
                user.trust_direct = trust.direct;
                user.trust_network = trust.direct ? (trust.value.length > 0 ? trust.value[0] : trust.value) : trust.value;
                cb(false, user);
            }).catch((err) => {
                cb(true, err);
            });
        } else {
            cb(err || result.length == 0 ? true : false, user);
        }

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