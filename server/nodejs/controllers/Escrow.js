'use strict';

var utils = require('../utils/writer.js');
var Escrow = require('../service/EscrowService');

module.exports.escrowacknowledge = function escrowacknowledge (req, res, next) {
  var escrowguid = req.swagger.params['escrowguid'].value;
  var witness = req.swagger.params['witness'].value;
  Escrow.escrowacknowledge(escrowguid,witness)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowaddshipping = function escrowaddshipping (req, res, next) {
  var escrow = req.swagger.params['escrow'].value;
  var shipping = req.swagger.params['shipping'].value;
  var witness = req.swagger.params['witness'].value;
  Escrow.escrowaddshipping(escrow,shipping,witness)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowbid = function escrowbid (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowbid(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowbidhistory = function escrowbidhistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Escrow.escrowbidhistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowcompleterefund = function escrowcompleterefund (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowcompleterefund(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowcompleterelease = function escrowcompleterelease (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowcompleterelease(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowcreaterawtransaction = function escrowcreaterawtransaction (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowcreaterawtransaction(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowfeedback = function escrowfeedback (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowfeedback(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowfeedbackhistory = function escrowfeedbackhistory (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Escrow.escrowfeedbackhistory(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowfilter = function escrowfilter (req, res, next) {
  var query = req.swagger.params['query'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  Escrow.escrowfilter(query,count,from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowinfo = function escrowinfo (req, res, next) {
  var escrow = req.swagger.params['escrow'].value;
  Escrow.escrowinfo(escrow)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrownew = function escrownew (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrownew(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowrefund = function escrowrefund (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowrefund(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.escrowrelease = function escrowrelease (req, res, next) {
  var request = req.swagger.params['request'].value;
  Escrow.escrowrelease(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
