'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/categories', require('./categories'));
router.use('/devices', require('./devices'));
router.use('/donors', require('./donors'));
router.use('/users', require('./users'));

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
  res.status(404).end();
});