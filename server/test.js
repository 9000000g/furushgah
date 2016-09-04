var express = require('express');
var app = require('express')();
var config = require('./config.json');
app.listen(config.server.port);
app.get('/test', (req, res) => {
    res.json({ error: false, result: 'Test OK!' });

});