'use strict';

var url = require('url');


var Asset = require('./AssetService');

/* Assets */
module.exports.assetinfo  = function assetinfo (req, res, next) {
  Asset.assetinfo (req.swagger.params, res, next);
};
