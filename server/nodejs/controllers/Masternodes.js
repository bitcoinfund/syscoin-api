'use strict';

var utils = require('../utils/writer.js');
var Masternodes = require('../service/MasternodesService');

module.exports.getgovernanceinfo = function getgovernanceinfo (req, res, next) {
  Masternodes.getgovernanceinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getpoolinfo = function getpoolinfo (req, res, next) {
  Masternodes.getpoolinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getsuperblockbudget = function getsuperblockbudget (req, res, next) {
  var height = req.swagger.params['height'].value;
  Masternodes.getsuperblockbudget(height)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gobject = function gobject (req, res, next) {
  var command = req.swagger.params['command'].value;
  Masternodes.gobject(command)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.masternode = function masternode (req, res, next) {
  var command = req.swagger.params['command'].value;
  Masternodes.masternode(command)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.masternodebroadcast = function masternodebroadcast (req, res, next) {
  var command = req.swagger.params['command'].value;
  Masternodes.masternodebroadcast(command)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.masternodelist = function masternodelist (req, res, next) {
  var mode = req.swagger.params['mode'].value;
  Masternodes.masternodelist(mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.privatesend = function privatesend (req, res, next) {
  var command = req.swagger.params['command'].value;
  Masternodes.privatesend(command)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sentinelping = function sentinelping (req, res, next) {
  var version = req.swagger.params['version'].value;
  Masternodes.sentinelping(version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voteraw = function voteraw (req, res, next) {
  var request = req.swagger.params['request'].value;
  Masternodes.voteraw(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
