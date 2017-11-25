var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

/**
 * Add redeemscript to local wallet for signing smart contract based alias transactions.
 *
 * redeemscript String 
 * returns Object
 **/
exports.aliasaddscript = function(redeemscript) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
 *
 * alias String The syscoin alias to get balance for
 * returns Object
 **/
exports.aliasbalance = function(alias) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clear your whitelist(controls who can resell).
 *
 * owneralias String 
 * witness String  (optional)
 * returns Object
 **/
exports.aliasclearwhitelist = function(owneralias,witness) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * scan and filter aliases
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.aliasfilter = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "aeiou",
  "_id" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all stored values of an alias.
 *
 * query String Generic filter query to pass into syscoinquery
 * count BigDecimal The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.aliashistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "op" : "aeiou",
  "publicvalue" : "aeiou",
  "address" : "aeiou",
  "encryption_privatekey" : "aeiou",
  "alias" : "aeiou",
  "_id" : "aeiou",
  "time" : 0.80082819046101150206595775671303272247314453125,
  "encryption_publickey" : "aeiou",
  "acceptcerttransfers" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Show values of an alias.
 *
 * aliasname String 
 * returns Alias
 **/
exports.aliasinfo = function(aliasname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "publicvalue" : "aeiou",
  "address" : "aeiou",
  "expired" : true,
  "encryption_privatekey" : "aeiou",
  "expires_on" : 6.02745618307040320615897144307382404804229736328125,
  "txid" : "aeiou",
  "_id" : "aeiou",
  "time" : 0.80082819046101150206595775671303272247314453125,
  "encryption_publickey" : "aeiou",
  "acceptcerttransfers" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request AliasNewRequest 
 * returns List
 **/
exports.aliasnew = function(request) {
  //TODO: remove default args if they are no longer needed
  var argList = [
    { prop: "aliaspeg" },
    { prop: "aliasname" },
    { prop: "password"},
    { prop: "publicvalue" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "accepttransfers", defaultValue: "Yes" },
    { prop: "expire", defaultValue: 0 },
    { prop: "nrequired", defaultValue: 0 },
    { prop: "aliases", defaultValue: "[]" }
  ];

  request.nrequired = varUtils.correctTypes(request.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING); //TODO: update correctTypes function for new request structure, if this util is still needed

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasNew.apply(syscoinClient, arr);

  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "aeiou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send multiple times from an alias. Amounts are double-precision floating point numbers.
 *
 * request AliasPayRequest 
 * returns List
 **/
exports.aliaspay = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "aeiou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all stored transactions related to an alias.
 *
 * query String Generic filter query to pass into syscoinquery
 * count BigDecimal The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.aliastxhistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alias" : "aeiou",
  "guid" : "aeiou",
  "_id" : "aeiou",
  "time" : 0.80082819046101150206595775671303272247314453125,
  "type" : "aeiou",
  "value" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request AliasUpdateRequest 
 * returns List
 **/
exports.aliasupdate = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "aeiou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
 *
 * request AliasUpdateWhitelistRequest 
 * returns List
 **/
exports.aliasupdatewhitelist = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "aeiou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all affiliates for this alias.
 *
 * alias String 
 * witness String  (optional)
 * returns List
 **/
exports.aliaswhitelist = function(alias,witness) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alias" : "aeiou",
  "discount_percentage" : 0.80082819046101150206595775671303272247314453125
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clean expired Syscoin services from indexer and internal database.
 *
 * returns Object
 **/
exports.prunesyscoinservices = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Query the indexer for information in a collection.
 *
 * collection String Collection name, either \\\"alias\\\", \\\"aliashistory\\\", \\\"aliastxhistory\\\", \\\"cert\\\",  \\\"certhistory\\\", \\\"offer\\\", \\\"offerhistory\\\", \\\"feedback\\\", \\\"escrow\\\", \\\"escrowbid\\\"
 * query String JSON query on the collection to retrieve a set of documents
 * options String JSON option arguments into the query. Based on mongoc_collection_find_with_opts. (optional)
 * returns List
 **/
exports.syscoinquery = function(collection,query,options) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "aeiou" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

