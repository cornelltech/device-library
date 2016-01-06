'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var auth = require('../auth.js');

router.get('/', function(req, res, next) {
    Category.find(req.query).populate('staffPick').exec()
        .then(function(categories) {
            res.json(categories);
        })
        .then(null, next);
})

router.post('/', auth.isAdmin, function(req, res, next) {
    var category = new Category(req.body);
    category.save(function(err, savedCategory) {
        if (err) return next(err);
        res.status(201).json(savedCategory);
    });
});

router.param('id', function(req, res, next, id) {
    Category.findById(id).populate('staffPick').exec()
        .then(function(category) {
            if (!category) throw Error('Not Found');
            req.category = category;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res) {
    res.json(req.category);
});

router.put('/:id', auth.isAdmin, function(req, res, next) {
    _.merge(req.category, req.body);
    req.category.save()
        .then(function(category) {
            res.json(category);
        })
        .then(null, next);
});