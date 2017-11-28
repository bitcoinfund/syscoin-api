var syscoinClient = require('../index').syscoinClient;

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
exports.aliasnew = async function(request) {
  //Note1: we should no longer require 'default args' as was the pattern in 2.1.x as there should now
  //      be a way to inform the rpc to us the default value by passing ""

  const aliasname = request.value.aliasname;
  /*publicvalue:
    description: Alias public profile data, 512 characters max.
    type: string
  accepttransfers:
    description: set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes.
    type: string
  expire_timestamp:
    description: Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(2.88^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year.
    type: string
  address:
    description: Address for this alias.
    type: string
  encryption_privatekey:
    description: Encrypted private key used for encryption/decryption of private data related to this alias. Should be encrypted to publickey.
    type: string
  encryption_publickey:
    description: Public key used for encryption/decryption of private data related to this alias.
    type: string
  witness:
    description: Witness alias name that will sign for web-of-trust notarization of this transaction.
    type: string*/

  //Note2: type correction util should no longer be needed, RPC should expect the correct types
  //      ie: nrequired should be a number because it is a numeric value. In 2.1.x the RPC expected this
  //          as a string. 2.2 should fix this, and expect a number for numeric values, boolean for true/false values,
  //          string for mix-content values, etc.

  var responseHandler = function(err, result, resHeaders) {
    //res.setHeader('Content-Type', 'application/json');
    //
    //if (err) {
    //  return commonUtils.reportError(res, err);
    //}
    //
    //console.log('Alias new:', result);
    //res.end(JSON.stringify(result));
  };

  const response = {};
  response['application/json'] = [];

  try {
    const result = await syscoinClient.aliasNew(aliasname);
    console.log("Res:" + JSON.stringify(result));
    response['application/json'].push(result);
    return response;
  }catch(e){}
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

