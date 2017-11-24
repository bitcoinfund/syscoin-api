'use strict';

var utils = require('../utils/writer.js');
var General = require('../service/GeneralService');

module.exports.addmultisigaddress = function addmultisigaddress (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.addmultisigaddress(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dumpprivkey = function dumpprivkey (req, res, next) {
  var address = req.swagger.params['address'].value;
  General.dumpprivkey(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dumpwallet = function dumpwallet (req, res, next) {
  var filename = req.swagger.params['filename'].value;
  General.dumpwallet(filename)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.encryptwallet = function encryptwallet (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.encryptwallet(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getaccount = function getaccount (req, res, next) {
  var syscoinaddress = req.swagger.params['syscoinaddress'].value;
  General.getaccount(syscoinaddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getaccountaddress = function getaccountaddress (req, res, next) {
  var account = req.swagger.params['account'].value;
  General.getaccountaddress(account)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getaddressbalance = function getaddressbalance (req, res, next) {
  var addresses = req.swagger.params['addresses'].value;
  General.getaddressbalance(addresses)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getaddressutxos = function getaddressutxos (req, res, next) {
  var addresses = req.swagger.params['addresses'].value;
  General.getaddressutxos(addresses)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getbalance = function getbalance (req, res, next) {
  var account = req.swagger.params['account'].value;
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.getbalance(account,minconf,addlockconf,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getblock = function getblock (req, res, next) {
  var hash = req.swagger.params['hash'].value;
  var verbose = req.swagger.params['verbose'].value;
  General.getblock(hash,verbose)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getblockchaininfo = function getblockchaininfo (req, res, next) {
  General.getblockchaininfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getblockcount = function getblockcount (req, res, next) {
  General.getblockcount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getinfo = function getinfo (req, res, next) {
  General.getinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getmininginfo = function getmininginfo (req, res, next) {
  General.getmininginfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getnetworkinfo = function getnetworkinfo (req, res, next) {
  General.getnetworkinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getnewaddress = function getnewaddress (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.getnewaddress(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getpeerinfo = function getpeerinfo (req, res, next) {
  General.getpeerinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getreceivedbyaccount = function getreceivedbyaccount (req, res, next) {
  var account = req.swagger.params['account'].value;
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  General.getreceivedbyaccount(account,minconf,addlockconf)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getreceivedbyaddress = function getreceivedbyaddress (req, res, next) {
  var syscoinaddress = req.swagger.params['syscoinaddress'].value;
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  General.getreceivedbyaddress(syscoinaddress,minconf,addlockconf)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gettransaction = function gettransaction (req, res, next) {
  var txid = req.swagger.params['txid'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.gettransaction(txid,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getunconfirmedbalance = function getunconfirmedbalance (req, res, next) {
  General.getunconfirmedbalance()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getwalletbalance = function getwalletbalance (req, res, next) {
  General.getwalletbalance()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getwalletinfo = function getwalletinfo (req, res, next) {
  General.getwalletinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importaddress = function importaddress (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.importaddress(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importprivkey = function importprivkey (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.importprivkey(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importpubkey = function importpubkey (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.importpubkey(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importwallet = function importwallet (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.importwallet(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaccounts = function listaccounts (req, res, next) {
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.listaccounts(minconf,addlockconf,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaddressgroupings = function listaddressgroupings (req, res, next) {
  General.listaddressgroupings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listreceivedbyaccount = function listreceivedbyaccount (req, res, next) {
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  var includeempty = req.swagger.params['includeempty'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.listreceivedbyaccount(minconf,addlockconf,includeempty,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listreceivedbyaddress = function listreceivedbyaddress (req, res, next) {
  var minconf = req.swagger.params['minconf'].value;
  var addlockconf = req.swagger.params['addlockconf'].value;
  var includeempty = req.swagger.params['includeempty'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.listreceivedbyaddress(minconf,addlockconf,includeempty,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listsinceblock = function listsinceblock (req, res, next) {
  var blockhash = req.swagger.params['blockhash'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  var targetConfirmations = req.swagger.params['target-confirmations'].value;
  General.listsinceblock(blockhash,includeWatchonly,targetConfirmations)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listtransactions = function listtransactions (req, res, next) {
  var account = req.swagger.params['account'].value;
  var count = req.swagger.params['count'].value;
  var from = req.swagger.params['from'].value;
  var includeWatchonly = req.swagger.params['includeWatchonly'].value;
  General.listtransactions(account,count,from,includeWatchonly)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendfrom = function sendfrom (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.sendfrom(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendmany = function sendmany (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.sendmany(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendtoaddress = function sendtoaddress (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.sendtoaddress(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signmessage = function signmessage (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.signmessage(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syscoindecoderawtransaction = function syscoindecoderawtransaction (req, res, next) {
  var hexstring = req.swagger.params['hexstring'].value;
  General.syscoindecoderawtransaction(hexstring)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syscoinsendrawtransaction = function syscoinsendrawtransaction (req, res, next) {
  var hexstring = req.swagger.params['hexstring'].value;
  General.syscoinsendrawtransaction(hexstring)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.validateaddress = function validateaddress (req, res, next) {
  var syscoinaddress = req.swagger.params['syscoinaddress'].value;
  General.validateaddress(syscoinaddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifymessage = function verifymessage (req, res, next) {
  var syscoinaddress = req.swagger.params['syscoinaddress'].value;
  var signature = req.swagger.params['signature'].value;
  var message = req.swagger.params['message'].value;
  General.verifymessage(syscoinaddress,signature,message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletlock = function walletlock (req, res, next) {
  General.walletlock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletpassphrase = function walletpassphrase (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.walletpassphrase(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.walletpassphrasechange = function walletpassphrasechange (req, res, next) {
  var request = req.swagger.params['request'].value;
  General.walletpassphrasechange(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
