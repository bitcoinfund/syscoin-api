'use strict';

var utils = require('../utils/writer.js');
var Offers = require('../service/OffersService');

module.exports.offerfilter = function offerfilter (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Offers.offerfilter(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offerhistory = function offerhistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Offers.offerhistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offerinfo = function offerinfo (req, res, next) {
  var guid = req.swagger.params['guid'].value;
  Offers.offerinfo(guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offerlink = function offerlink (req, res, next) {
  var request = req.swagger.params['request'].value;
  Offers.offerlink(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offernew = function offernew (req, res, next) {
  var request = req.swagger.params['request'].value;
  Offers.offernew(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offerupdate = function offerupdate (req, res, next) {
  var request = req.swagger.params['request'].value;
  Offers.offerupdate(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
