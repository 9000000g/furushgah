const mysql = require('mysql');
const qc = require('query-creator');
const fs = require('fs');
const jimp = require('jimp')
const config = require('../config.json');
const db = mysql.createConnection(config.mysql);
const log = console.log;
const async = require('async');

db.connect();

module.exports.db = db;


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
                log(errj);
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



// New Functions {
module.exports.network = (usr, output = 0 /* see endOfStory func */ , level = 5) => {
    return new Promise((resolve, reject) => {
        let ret = [];
        let jobCount = 0;
        let didCount = 0;

        let lengthInRet = (_usr) => {
            let founded = 0;
            for (let i = 0; i < ret.length; i++) {
                if (ret[i].user == _usr) {
                    founded++;
                }
            }
            return founded;
        }
        let innerFunction = (_usr, _trust = 0, _parent = null, _level = 0) => {
            //log(_usr, _trust, _parent, _level);
            return new Promise((_resolve, _reject) => {
                module.exports.connectedPeople(_usr, _trust).then((_result) => {
                    //log(_usr + ' child of ' + _parent);
                    //log(_result);
                    if (_level >= level) {
                        endOfStory(ret);
                        didCount++;
                        _resolve();
                    } else {
                        jobCount += _result.length;
                        if (_result.length == 0) {
                            endOfStory(ret);
                            didCount++;
                            _resolve();
                        }
                        for (let i = 0; i < _result.length; i++) {
                            ret.push(Object.assign(_result[i], {
                                parent: _parent
                            }));
                            let indexInRet = ret.length - 1;
                            if (lengthInRet(_result[i].user) <= 1 && _result[i].trust > 0 && _level <= level) {
                                innerFunction(_result[i].user, 1, indexInRet, (_level + 1)).then(() => {
                                    endOfStory(ret);
                                    didCount++;
                                    _resolve();
                                });
                            } else {
                                endOfStory(ret);
                                didCount++;
                                _resolve();
                            }
                        }

                    }
                }).catch((_err) => {
                    reject(_err);
                });

            });
        }
        let endOfStory = function(data) {
            //log('EOS called ' + (didCount < jobCount), didCount, jobCount);
            if (didCount < jobCount) {
                return false;
            }
            data.push({
                user: usr,
                trust: 5,
                parent: null
            });
            switch (output) {
                case 0: // with detail
                    resolve(data);
                    break;
                case 1: // just user ids
                    let _data = [];
                    for (let i = 0; i < data.length; i++) {
                        let found = _data.find((z) => z.user == data[i].user);
                        if (!found) {
                            _data.push(data[i].user);
                        }
                    }
                    resolve(_data);
                    break;
            }
        }
        innerFunction(usr);
    });

}
module.exports.networkOf = (usr, usr2) => {
    return new Promise((resolve, reject) => {
        module.exports.network(usr).then((result) => {
            let founded = [];
            for (let i = 0; i < result.length; i++) {
                if (result[i].user == usr2) {
                    founded.push(i);
                }
            }
            let network = [];
            for (let i = 0; i < founded.length; i++) {
                network.push([]);
                let p = result[founded[i]];
                network[i].push(
                    p
                );
                while (p.parent != null) {
                    p = result[p.parent];
                    network[i].push(
                        p
                    );
                }
                network[i] = network[i].reverse();
            }
            resolve(network);
        });
    });
}
module.exports.trust = (usr, usr2, networkOf = false) => {
    return new Promise((resolve, reject) => {
        let endOfStory = function(data) {
            let ret = {};
            let direct = false;
            let trusts = [];
            if (data.length == 0) {
                trusts.push(-1);
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].length == 1) { // i rate him directed
                        trusts = [];
                        trusts.push(data[i][0].trust);
                        direct = true;
                        break;
                    } else {
                        direct = false;
                        for (let j = 0; j < data[i].length; j++) {
                            trusts.push(data[i][j].trust);
                        }
                    }
                }
            }

            resolve({
                trust: Math.min(...trusts),
                direct: direct
            })
        }
        if (networkOf === false) {
            module.exports.networkOf(usr, usr2).then((result) => {
                endOfStory(result);
            });
        } else {
            endOfStory(networkOf);
        }
    });
}

module.exports.connectedPeople = (usr, trust = -1, output = 0 /* see endOfStory func */ ) => {
    return new Promise((resolve, reject) => {
        let query = qc.new()
            .select('following AS user, trust, u.alias AS alias', 'followers f')
            .innerJoin('users u', 'f.following = u.id')
            .where(`follower = ${usr} AND trust >= ${trust} AND follower != following`)
            .val();
        let endOfStory = function(data) {
            switch (output) {
                case 0: // with detail
                    resolve(data);
                    break;
                case 1: // just user ids
                    let _data = [];
                    for (let i = 0; i < data.length; i++) {
                        _data.push(data[i].user);
                    }
                    resolve(_data);
                    break;
            }
        }
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                endOfStory(result);
            }
        });
    });
}


// } End of New Functions
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
module.exports.searchSales = (filters = {}, me = 1, page = 1, cb = new Function()) => {

    return new Promise((resolve, reject) => {
        let limit = 8;
        let limitStart = limit * page - limit;
        let where = 'TRUE';
        let startQuery = () => {
            console.log(where);
            let query = qc.new().select([
                    'id',
                ], 'sales')
                .where(where)
                .orderBy('date', 'desc')
                .limit(limitStart, limit)
                .val();
            //log(query);
            db.query(query, (err, result) => {

                if (err) {
                    reject(err);
                } else {
                    // now we have id of sales.
                    let resultF = [];
                    async.forEach(result, function(item, nextOne) {
                        module.exports.fetchSale(item.id, me).then(function(itemF) {
                            resultF.push(itemF);
                            nextOne();
                        }).catch(nextOne);
                    }, function(err) {
                        resolve(resultF);
                    });
                }
            });
        }
        async.series([
            function(nextOne) {
                if (filters.text) {
                    where += ` AND (title LIKE '%${filters.text.split(' ').join('%')}%' OR body LIKE '%${filters.text.split(' ').join('%')}%')`;
                }
                if (filters.saleTypes) {
                    where += ` AND type = '${filters.saleTypes}'`;
                }
                if (filters.type) {
                    where += ` AND type = '${filters.type}'`;
                    switch (filters.type) {
                        case 'sale':
                            if (filters.totalPriceMin) {
                                where += ` AND totalPrice >= '${filters.totalPriceMin}'`;
                            }
                            if (filters.totalPriceMax) {
                                where += ` AND totalPrice <= '${filters.totalPriceMax}'`;
                            }
                            break;
                        case 'rent':
                            if (filters.mortgagePriceMin) {
                                where += ` AND mortgagePrice >= '${filters.mortgagePriceMin}'`;
                            }
                            if (filters.mortgagePriceMax) {
                                where += ` AND mortgagePrice <= '${filters.mortgagePriceMax}'`;
                            }
                            if (filters.period) {
                                where += ` AND period = '${filters.period}'`;
                            }
                            if (filters.periodPriceMin) {
                                where += ` AND periodPrice >= '${filters.periodPriceMin}'`;
                            }
                            if (filters.periodPriceMax) {
                                where += ` AND mortgagePrice <= '${filters.periodPriceMax}'`;
                            }
                            break;
                    }
                }
                nextOne();
            },
            function(nextOne) {
                if (filters.user && filters.user != 'timeline') {
                    where += ` AND user = '${filters.user}'`;
                    nextOne();
                } else if ((filters.user && filters.user == 'timeline') || filters.timeline) {
                    module.exports.network(me, 1).then((list) => {
                        if (list.length > 1) { // if it just 1, means thas is myself
                            where += ` AND user IN(${list.join()})`;
                        }
                        nextOne();
                    });
                } else {
                    nextOne();
                }
            },
            startQuery
        ]);


    });
}
module.exports.fetchSale = (id = 1, me = 0, getDetail = true) => {
    let query;
    if (getDetail) {
        query = qc.new().select([
                's.*',
                `CONCAT("${config.server.address + ':' + config.server.port + '/thumbnails/sales/'}", s.id) AS thumbnail`,
                'u.alias AS user_alias'
            ], 'sales s')
            .innerJoin('users u', 's.user = u.id')
            .where(`s.id = ${id}`)
            .groupBy('s.id').val();
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
                module.exports.networkOf(me, sale.user).then((networkOf) => {
                    sale.network = networkOf;
                    module.exports.trust(me, sale.user, networkOf).then((trust) => {
                        sale.trust = trust;
                        resolve(sale);
                    });
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
                trust: -1
            });
        } else {
            cb(false, resultCheck[0]);
        }
    });
}
module.exports.setRelation = (user1 = 1, user2 = 2, relation = {}, cb = new Function()) => {
    module.exports.getRelation(user1, user2, (err, result) => {
        delete relation.follow;
        if (relation.trust == -1) {
            let query = qc.new().delete('followers').where(`follower = ${user1} AND following = ${user2}`).val();
            db.query(query, (err, result) => {
                cb(err ? err : false, result ? result : false);
            });
        } else {
            let query = qc.new().replace('followers',
                Object.assign(result, relation)
            ).val();
            db.query(query, (err, result) => {
                cb(err ? err : false, result ? result : false);
            });
        }

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
    where = `${by} = "${data.username}" `
    if (data.password) {
        where += `AND password = "${data.password}"`;
    }


    let query = qc.new().select([
            'id',
            'mobile',
            'alias'
        ], 'users')
        .where(where)
        .val(false);

    db.query(query, (err, result) => {
        let user = !err && result.length == 1 ? result[0] : false;
        if (me && user) {
            module.exports.networkOf(me, user.id).then((networkOf) => {
                user.network = networkOf;
                module.exports.trust(me, user.id, networkOf).then((trust) => {
                    user.trust = trust;
                    cb(false, user);
                });
            });
        } else if (err || result.length == 0) {
            cb(true, err);
        } else {
            cb(false, user);
        }

    });
}

module.exports.newUser = (data = {}, cb = new Function()) => {
    let query = qc.new().insert('users', data).val();
    db.query(query, (err, result) => {
        cb(err ? true : false, !err ? result.insertId : err);
    });
}
module.exports.editUser = (id = 1, data = {}, cb = new Function()) => {
    let query = qc.new().update('users', data).where('id = ?', [id]).val();
    db.query(query, (err, result) => {
        cb(err ? true : false, !err ? result.insertId : err);
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