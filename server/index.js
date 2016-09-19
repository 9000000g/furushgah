const app = require('express')();
const cors = require('cors-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
//const http = require('http').Server(app).listen(3001);
//const io = require('socket.io')(http);
//const ss = require('socket.io-stream');
const multer = require('multer');
const upload = multer({
    dest: `${__dirname}/tmp/`,
    limits: {
        fieldNameSize: 999999999,
        fieldSize: 999999999
    }
});
const jimp = require('jimp')
const glob = require("glob");
const ses = require('se-session');
const funcs = require('./modules/funcs');
const log = console.log;

const config = require('./config.json');
//io.use(ses.io());
app.use(ses.express({ required: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.listen(config.server.port);
let me = false;


app.use(function(req, res, next) {
    if (typeof req.session != 'object') {
        req.session = null;
    } else {
        let session = req.session;
        session.me = typeof session.me == 'undefined' ? false : session.me;
    }
    next();
});
app.post('/file', upload.single('file'), (req, res) => {
    let newPath = `${__dirname}/uploads/${funcs.uniqueName()}.jpg`;
    res.json({ error: true, result: req.file.path });

});
app.get('/file/:name', (req, res) => {
    let basedir = `${__dirname}/uploads`;
    let file = `${basedir}/${req.params.name}`;
    if (!funcs.checkExists(file, 'file')) {
        file = `${basedir}/thumb-default.jpg`;
    }
    let content = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end(content, 'file');
});
app.post('/login', (req, res) => {
    req.session.me = false;
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (!req.body.username ||
        funcs.parsePhone(req.body.username) === false ||
        !req.body.password ||
        req.body.password.length < 6
    ) {
        res.json({ error: true, result: 'Bad Data!' });
        return;
    }
    req.body.username = funcs.parsePhone(req.body.username);
    funcs.fetchUser('mobile', req.body, null, (err, result) => {
        req.session.me = result;
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/logout', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    req.session.me = false;
    res.json({ error: false, result: true });
    return;
});
app.get('/timeline/:page?', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let page = req.params.page ? req.params.page : 1;
    setTimeout(function() {
        funcs.fetchTimeline(req.session.me.id, page).then((result) => {
            res.json({ error: false, result: result });
            return;
        });
    }, 1000);
});

app.get('/sales/search/:page?', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let page = req.params.page ? req.params.page : 1;
    req.query.timeline = typeof req.query.timeline == 'undefined' ? true : (req.query.timeline == 'true' ? true : false);
    funcs.searchSales(req.query, req.session.me.id, page).then((result) => {
        res.json({ error: false, result: result });
        return;
    }).catch((err) => {
        console.log(err);
        res.json({ error: true, result: err });
    });
});
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }
    let me = req.session && req.session.me !== false ? req.session.me.id : null;
    funcs.fetchUser((id.toString().length < 5 ? 'id' : 'mobile'), { username: id }, me, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/users/new', (req, res) => {
    if (!req.body.alias || !req.body.mobile || !req.body.password) {
        res.json({ error: true, result: 'Data Error!' });
        return;
    }
    funcs.newUser(req.body, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/followers', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }
    funcs.fetchFollowers(id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/following', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }
    funcs.fetchFollowing(id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/trusts', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }
    funcs.fetchTrusts(id, 0, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/sales/:page?', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }
    let page = req.params.page ? req.params.page : 1;
    funcs.fetchSales(id, page, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/checkFollow', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let follower = req.session.me.id;
    let following = req.params.id;
    funcs.checkFollow(follower, following, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/users/:id/relation', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let id = req.params.id;
    if (id == 'me') {
        id = req.session.me.id;
    }
    let user1 = req.session.me.id;
    let user2 = id;
    funcs.getRelation(user1, user2, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/users/:id/relation', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    if (typeof req.body.follow == 'undefined' && typeof req.body.trust == 'undefined') {
        res.json({ error: true, result: 'Data Error!' });
        return;
    }
    let user1 = req.session.me.id;
    let user2 = req.params.id;
    if (user1 == user2) {
        res.json({ error: true, result: 'Data Error!' });
        return;
    }
    let relation = req.body;
    funcs.setRelation(user1, user2, relation, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});


app.get('/users/:id/network', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }

    funcs.getNetworkList(parseInt(id)).then((result) => {
        res.json({ error: false, result: result });
        return;
    });
});
app.get('/users/:id/network/:id2', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }

    funcs.getNetworkList(parseInt(id)).then((result) => {
        res.json({ error: false, result: result });
        return;
    });
});
app.get('/users/:id/trust/:id2', (req, res) => {
    let id = req.params.id;
    if (id == 'me') {
        if (req.session == null) {
            res.json({ error: true, result: 'Session Error!' });
            return;
        }
        if (req.session.me === false) {
            res.json({ error: true, result: 'Login First!' });
            return;
        }
        id = req.session.me.id;
    }

    funcs.getTrust(id, req.params.id2).then((result) => {
        res.json({ error: false, result: result });
        return;
    });
});
app.post('/users/:id/follow', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let follower = req.session.me.id;
    let following = req.params.id;
    funcs.follow(follower, following, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/users/:id/unfollow', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let follower = req.session.me.id;
    let following = req.params.id;
    funcs.unfollow(follower, following, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/sales/new', upload.array(), (req, res) => {
    //console.log(req.body)
    //thumbnail, 
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    if (!req.body.thumbnail) {
        res.json({ error: true, result: typeof req.body.thumbnail });
        return;
    }
    //console.log(req.body);
    if (!req.body.title) {
        res.json({ error: true, result: 'Data Error!' });
        return;
    }
    req.body.user = req.session.me.id;
    req.body.date = funcs.mysqlDate(new Date());
    let b64 = req.body.thumbnail;
    delete req.body.thumbnail;
    funcs.newSale(req.body, (err, result) => {
        console.log(err, result);
        let path = `${__dirname}/uploads/thumb-${result.insertId}.jpg`;
        funcs.b64toFile(b64, path).then(() => {
            res.json({ error: false, result: true });
        }).catch(() => {
            res.json({ error: true, result: errj.code });
        });
    });
});
app.get('/sales/:id', (req, res) => {
    let id = req.params.id;
    let me = req.session.me !== false ? req.session.me.id : null;
    funcs.fetchSale(id, me).then((result) => {
        res.json({ error: false, result: result });
        return;
    });
});
app.get('/sales/:id/checkFavorite', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    funcs.checkFavorite(req.session.me.id, req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/sales/:id/favorites', (req, res) => {
    funcs.fetchFavorites(req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/sales/:id/favorites/new', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    funcs.newFavorite(req.session.me.id, req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/sales/:id/favorites/delete', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    funcs.deleteFavorite(req.session.me.id, req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/sales/:id/delete', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    let me = req.session.me !== false ? req.session.me.id : null;
    let id = req.params.id;
    funcs.fetchSale(id, me, false).then((result) => {
        if (result.user != req.session.me.id) {
            res.json({ error: true, result: 'Not Allowed!' });
            return;
        }
        let address = `${__dirname}/uploads/thumb-${id}.jpg`;

        if (funcs.checkExists(address, 'file')) {
            fs.unlinkSync(address);
        }
        funcs.deleteSale(id, (err2, result2) => {
            res.json({ error: err2, result: result2 });
            return;
        });
    });
});
app.get('/sales/:id/checkComment', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    funcs.checkComment(req.session.me.id, req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/sales/:id/comments', (req, res) => {
    funcs.fetchComments(req.params.id, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.post('/sales/:id/comments/new', (req, res) => {
    if (req.session == null) {
        res.json({ error: true, result: 'Session Error!' });
        return;
    }
    if (req.session.me === false) {
        res.json({ error: true, result: 'Login First!' });
        return;
    }
    if (!req.body.body) {
        res.json({ error: true, result: 'Data Error!' });
        return;
    }
    funcs.newComment(req.session.me.id, req.params.id, req.body.body, (err, result) => {
        res.json({ error: err, result: result });
        return;
    });
});
app.get('/sales/:id/thumbnail', (req, res) => {
    let basedir = `${__dirname}/uploads`;
    let file = `${basedir}/thumb-${req.params.id}.*`;
    glob(file, function(err, files) {
        if (files.length != 1) {
            res.sendFile(`${basedir}/thumb-default.jpg`);
        } else {
            res.sendFile(files[0]);
        }
    });
});

app.get('/hi', (req, res) => {
    res.json({ error: false, result: 'Hi Baby :-)' });
    return;
});

app.post('/upload', upload.array(), (req, res) => {
    let path = './out.jpg';
    funcs.b64toFile(req.body.file, path).then(() => {
        res.json({ error: false, result: true });
    }).catch(() => {
        res.json({ error: true, result: errj.code });
    });
});


app.get('/nainemom/resize', (req, res) => {

    let basedir = `${__dirname}/uploads`;
    let file = `${basedir}/thumb-*.*`;
    let resize = function(file) {
        let newPath = `${path.dirname(file)}/${path.basename(file, path.extname(file))}.jpg`;
        jimp.read(file).then((lenna) => {
            lenna.resize(800, jimp.AUTO)
                .quality(50)
                .write(newPath, () => {
                    if (newPath != file) {
                        fs.unlinkSync(file);
                    }
                });
        });
    }
    glob(file, (err, files) => {
        for (let i in files) {

            resize(files[i]);
        }
        setTimeout(() => {
            res.json({ error: false, result: files });
        }, 1000);

    });
});
app.get('/nainemom/rebuild-level-db', (req, res) => {
    funcs.rebuildLevelDb((result) => {
        res.json({ error: false, result: result });
    });
});