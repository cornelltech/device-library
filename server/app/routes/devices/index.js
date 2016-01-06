'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Device = mongoose.model('Device');
var auth = require('../auth.js');

router.get('/', function(req, res, next) {
    Device.find(req.query)
        .populate('categories')
        .exec()
        .then(function(devices) {
            res.json(devices);
        })
        .then(null, next);
})

router.post('/', auth.isAdmin, function(req, res, next) {
    var device = new Device(req.body);
    device.save(function(err, savedDevice) {
        if (err) return next(err);
        res.status(201).json(savedDevice);
    });
});

router.param('id', function(req, res, next, id) {
    Device.findById(id)
        .populate('categories')
        .exec()
        .then(function(device) {
            if (!device) throw Error('Not Found');
            req.device = device;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res) {
    res.json(req.device);
});

router.put('/:id', auth.isAdmin, function(req, res, next) {
    _.merge(req.device, req.body);
    req.device.save()
        .then(function(device) {
            res.json(device);
        })
        .then(null, next);
});