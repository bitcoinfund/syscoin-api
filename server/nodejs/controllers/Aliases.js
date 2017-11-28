'use strict';

var utils = require('../utils/writer.js');
var Aliases = require('../service/AliasesService');

module.exports.aliasaddscript = function aliasaddscript (req, res, next) {
  var redeemscript = req.swagger.params['redeemscript'].value;
  Aliases.aliasaddscript(redeemscript)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasbalance = function aliasbalance (req, res, next) {
  var alias = req.swagger.params['alias'].value;
  Aliases.aliasbalance(alias)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasclearwhitelist = function aliasclearwhitelist (req, res, next) {
  var owneralias = req.swagger.params['owneralias'].value;
  var witness = req.swagger.params['witness'].value;
  Aliases.aliasclearwhitelist(owneralias,witness)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasfilter = function aliasfilter (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Aliases.aliasfilter(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliashistory = function aliashistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Aliases.aliashistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasinfo = function aliasinfo (req, res, next) {
  var aliasname = req.swagger.params['aliasname'].value;
  Aliases.aliasinfo(aliasname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasnew = function aliasnew(req, res, next) {
  const request = req.swagger.params['request'].value;
  Aliases.aliasnew(request).then(result => {
    utils.writeJson(res, result, 500);
  }).catch(e => {
    utils.writeJson(res, e, 500);
  });
};

module.exports.aliaspay = function aliaspay (req, res, next) {
  var request = req.swagger.params['request'].value;
  Aliases.aliaspay(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliastxhistory = function aliastxhistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Aliases.aliastxhistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasupdate = function aliasupdate (req, res, next) {
  var request = req.swagger.params['request'].value;
  Aliases.aliasupdate(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliasupdatewhitelist = function aliasupdatewhitelist (req, res, next) {
  var request = req.swagger.params['request'].value;
  Aliases.aliasupdatewhitelist(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aliaswhitelist = function aliaswhitelist (req, res, next) {
  var alias = req.swagger.params['alias'].value;
  var witness = req.swagger.params['witness'].value;
  Aliases.aliaswhitelist(alias,witness)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.prunesyscoinservices = function prunesyscoinservices (req, res, next) {
  Aliases.prunesyscoinservices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syscoinquery = function syscoinquery (req, res, next) {
  var collection = req.swagger.params['collection'].value;
  var query = req.swagger.params['query'].value;
  var options = req.swagger.params['options'].value;
  Aliases.syscoinquery(collection,query,options)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
