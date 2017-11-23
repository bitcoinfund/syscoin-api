'use strict';


/**
 * scan and filter offers
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.offerfilter = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "offertype" : "aeiou",
  "auction_expires_on" : 2.3021358869347654518833223846741020679473876953125,
  "offer_units" : 5.962133916683182377482808078639209270477294921875,
  "private" : true,
  "quantity" : 5.63737665663332876420099637471139430999755859375,
  "cert" : "aeiou",
  "title" : "aeiou",
  "paymentoptions" : 1.46581298050294517310021547018550336360931396484375,
  "auction_reserve_price" : 7.061401241503109105224211816675961017608642578125,
  "price" : 6.02745618307040320615897144307382404804229736328125,
  "alias" : "aeiou",
  "currency" : "aeiou",
  "_id" : "aeiou",
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
 * List all stored values of an offer.
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.offerhistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "offertype" : "aeiou",
  "auction_expires_on" : 7.061401241503109105224211816675961017608642578125,
  "op" : "aeiou",
  "offer_units" : 5.63737665663332876420099637471139430999755859375,
  "private" : true,
  "quantity" : 2.3021358869347654518833223846741020679473876953125,
  "description" : "aeiou",
  "cert" : "aeiou",
  "title" : "aeiou",
  "auction_deposit" : 3.61607674925191080461672754609026014804840087890625,
  "paymentoptions" : 5.962133916683182377482808078639209270477294921875,
  "auction_reserve_price" : 9.301444243932575517419536481611430644989013671875,
  "offer" : "aeiou",
  "price" : 6.02745618307040320615897144307382404804229736328125,
  "alias" : "aeiou",
  "currency" : "aeiou",
  "commission" : 1.46581298050294517310021547018550336360931396484375,
  "_id" : "aeiou",
  "category" : "aeiou",
  "auction_require_witness" : true,
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
 * Show values of an offer.
 *
 * guid String 
 * returns Offer
 **/
exports.offerinfo = function(guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "auction_expires_on" : 3.61607674925191080461672754609026014804840087890625,
  "offer_units" : 2.3021358869347654518833223846741020679473876953125,
  "private" : true,
  "expires_on" : 0.80082819046101150206595775671303272247314453125,
  "offers_sold" : 9.301444243932575517419536481611430644989013671875,
  "description" : "aeiou",
  "cert" : "aeiou",
  "title" : "aeiou",
  "auction_deposit" : 4.1456080298839363962315474054776132106781005859375,
  "expired" : true,
  "price" : 1.46581298050294517310021547018550336360931396484375,
  "alias" : "aeiou",
  "currency" : "aeiou",
  "commission" : 5.962133916683182377482808078639209270477294921875,
  "auction_require_witness" : true,
  "height" : 6.02745618307040320615897144307382404804229736328125,
  "offertype" : "aeiou",
  "quantity" : 7.061401241503109105224211816675961017608642578125,
  "address" : "aeiou",
  "txid" : "aeiou",
  "offerlink_guid" : "aeiou",
  "paymentoptions" : 5.63737665663332876420099637471139430999755859375,
  "offerlink_seller" : "aeiou",
  "auction_reserve_price" : 2.027123023002321833274663731572218239307403564453125,
  "_id" : "aeiou",
  "category" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request OfferLinkRequest 
 * returns List
 **/
exports.offerlink = function(request) {
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
 * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request OfferNewRequest 
 * returns List
 **/
exports.offernew = function(request) {
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
 * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request OfferUpdateRequest 
 * returns List
 **/
exports.offerupdate = function(request) {
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

