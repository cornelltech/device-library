'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Donor = mongoose.model('Donor');
var auth = require('../auth.js');

router.get('/', function(req, res, next) {
    Donor.find(req.query)
        .then(function(donors) {
            res.json(donors);
        })
        .then(null, next);
})

router.post('/', auth.isAdmin, function(req, res, next) {
    var donor = new Donor(req.body);
    donor.save(function(err, savedDonor) {
        if (err) return next(err);
        res.status(201).json(savedDonor);
    });
});

router.param('id', function(req, res, next, id) {
    Donor.findById(id)
        .then(function(donor) {
            if (!donor) throw Error('Not Found');
            req.donor = donor;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res) {
    res.json(req.donor);
});

router.put('/:id', auth.isAdmin, function(req, res, next) {
    _.merge(req.donor, req.body);
    req.donor.save()
        .then(function(donor) {
            res.json(donor);
        })
        .then(null, next);
});