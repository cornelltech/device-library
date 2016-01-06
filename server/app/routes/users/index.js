'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth.js');

router.get('/', auth.isAdmin, function(req, res, next) {
    User.find(req.query).populate('checkedout.device holds.device')
        .then(function(users) {
            res.json(users);
        })
        .then(null, next);
})

router.post('/', auth.isAdmin, function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, savedUser) {
        if (err) return next(err);
        res.status(201).json(savedUser);
    });
});

router.param('id', auth.isAdmin, function(req, res, next, id) {
    User.findById(id).populate('checkedout.device holds.device')
        .then(function(user) {
            if (!user) throw Error('Not Found');
            req.user = user;
            next();
        })
        .then(null, next);
});

router.get('/:id', auth.isAdmin, function(req, res) {
    res.json(req.user);
});

router.put('/:id', auth.isAdmin, function(req, res, next) {
    _.merge(req.user, req.body);
    req.user.save()
        .then(function(user) {
            res.json(user);
        })
        .then(null, next);
});