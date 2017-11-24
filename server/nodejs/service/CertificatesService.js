'use strict';


/**
 * scan and filter certs
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.certfilter = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alias" : "aeiou",
  "_id" : "aeiou",
  "title" : "aeiou",
  "category" : "aeiou",
  "height" : 0.80082819046101150206595775671303272247314453125
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all stored values of an cert.
 *
 * query String Generic filter query to pass into syscoinquery
 * count BigDecimal The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.certhistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "op" : "aeiou",
  "publicvalue" : "aeiou",
  "alias" : "aeiou",
  "cert" : "aeiou",
  "_id" : "aeiou",
  "time" : 6.02745618307040320615897144307382404804229736328125,
  "access_flags" : 1.46581298050294517310021547018550336360931396484375,
  "title" : "aeiou",
  "category" : "aeiou",
  "height" : 0.80082819046101150206595775671303272247314453125
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Show stored values of a single certificate.
 *
 * guid String 
 * returns Cert
 **/
exports.certinfo = function(guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "publicvalue" : "aeiou",
  "expired" : true,
  "expires_on" : 5.962133916683182377482808078639209270477294921875,
  "txid" : "aeiou",
  "alias" : "aeiou",
  "_id" : "aeiou",
  "time" : 6.02745618307040320615897144307382404804229736328125,
  "access_flags" : 1.46581298050294517310021547018550336360931396484375,
  "title" : "aeiou",
  "category" : "aeiou",
  "height" : 0.80082819046101150206595775671303272247314453125
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request CertNewRequest 
 * returns List
 **/
exports.certnew = function(request) {
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
 * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request CertTransferRequest 
 * returns List
 **/
exports.certtransfer = function(request) {
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
 * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request CertUpdateRequest 
 * returns List
 **/
exports.certupdate = function(request) {
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

