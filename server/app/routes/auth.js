'use strict';

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).end();
  }
}

var isAdmin = function(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).end();
  }
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  isAdmin: isAdmin
};