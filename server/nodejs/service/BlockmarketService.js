'use strict';


/**
 * Returns a session token for use with subsquent protected calls.
 *
 * auth String SHA1 hash of the user's authentication information- usernamepassword.
 * returns LoginResponse
 **/
exports.login = function(auth) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "message" : "aeiou",
  "token" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
 *
 * request StoreDataRequest 
 * returns StoreDataResponse
 **/
exports.storedata = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "storeLocations" : [ {
    "dataUrl" : "aeiou"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

