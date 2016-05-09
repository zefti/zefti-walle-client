var crypto = require('crypto');
var uuid = require('node-uuid');
var lib = require('zefti-utils');
var async = require('async');
var config = require('zefti-config-manager')().settings;
var errors = require('../lib/errors.json');
var errorHandler = require('zefti-error-handler');
errorHandler.addErrors(errors);

var sessionExpireTime = config.sessionExpireTime || 3600;



module.exports = function(dependencies) {
  var uniqueUser = dependencies.uniqueuser || null;
  var user = dependencies.user || null;
  var session = dependencies.session || null;
  var appName = dependencies.appName;

};
