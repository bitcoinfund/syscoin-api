'use strict';

var utils = require('../utils/writer.js');
var Certificates = require('../service/CertificatesService');

module.exports.certfilter = function certfilter (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Certificates.certfilter(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certhistory = function certhistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Certificates.certhistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certinfo = function certinfo (req, res, next) {
  var guid = req.swagger.params['guid'].value;
  Certificates.certinfo(guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certnew = function certnew (req, res, next) {
  var request = req.swagger.params['request'].value;
  Certificates.certnew(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certtransfer = function certtransfer (req, res, next) {
  var request = req.swagger.params['request'].value;
  Certificates.certtransfer(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certupdate = function certupdate (req, res, next) {
  var request = req.swagger.params['request'].value;
  Certificates.certupdate(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
