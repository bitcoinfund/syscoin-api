'use strict';

var utils = require('../utils/writer.js');
var Blockmarket = require('../service/BlockmarketService');

module.exports.login = function login (req, res, next) {
  var auth = req.swagger.params['auth'].value;
  Blockmarket.login(auth)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storedata = function storedata (req, res, next) {
  var request = req.swagger.params['request'].value;
  Blockmarket.storedata(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
