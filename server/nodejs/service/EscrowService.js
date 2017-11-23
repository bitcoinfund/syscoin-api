'use strict';


/**
 * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
 *
 * escrowguid String 
 * witness String  (optional)
 * returns List
 **/
exports.escrowacknowledge = function(escrowguid,witness) {
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
 * Add shipping to an escrow.
 *
 * escrow String GUID of escrow
 * shipping String Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
 * witness String Witness alias name that will sign for web-of-trust notarization of this transaction. (optional)
 * returns List
 **/
exports.escrowaddshipping = function(escrow,shipping,witness) {
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
 * Bid on an auction.
 *
 * request EscrowBidRequest 
 * returns List
 **/
exports.escrowbid = function(request) {
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
 * scan and filter bids on escrow contracts
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.escrowbidhistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "offer" : "aeiou",
  "bid_in_payment_option_per_unit" : "aeiou",
  "witness" : "aeiou",
  "bidder" : "aeiou",
  "escrow" : "aeiou",
  "_id" : "aeiou",
  "bid_in_offer_currency_per_unit" : "aeiou",
  "height" : 0.80082819046101150206595775671303272247314453125,
  "status" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
 *
 * request EscrowCompleteRefundRequest 
 * returns List
 **/
exports.escrowcompleterefund = function(request) {
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
 * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
 *
 * request EscrowCompleteReleaseRequest 
 * returns List
 **/
exports.escrowcompleterelease = function(request) {
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
 * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
 *
 * request EscrowCreateRawTransactionRequest 
 * returns List
 **/
exports.escrowcreaterawtransaction = function(request) {
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
 * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
 *
 * request EscrowFeedbackRequest 
 * returns List
 **/
exports.escrowfeedback = function(request) {
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
 * scan and filter feedbacks and ratings
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.escrowfeedbackhistory = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "offer" : "aeiou",
  "feedback" : "aeiou",
  "feedbackuserfrom" : "aeiou",
  "rating" : 6.02745618307040320615897144307382404804229736328125,
  "escrow" : "aeiou",
  "txid" : "aeiou",
  "feedbackuserto" : "aeiou",
  "_id" : "aeiou",
  "time" : 0.80082819046101150206595775671303272247314453125
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * scan and filter escrows
 *
 * query String Generic filter query to pass into syscoinquery
 * count String The number of results to return (optional)
 * from String Show results from this GUID [from], empty means first (optional)
 * returns List
 **/
exports.escrowfilter = function(query,count,from) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "offer" : "aeiou",
  "seller" : "aeiou",
  "arbiter" : "aeiou",
  "escrow" : "aeiou",
  "_id" : "aeiou",
  "height" : 0.80082819046101150206595775671303272247314453125,
  "buyer" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Show stored values of a single escrow
 *
 * escrow String GUID of escrow
 * returns Escrow
 **/
exports.escrowinfo = function(escrow) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "seller" : "aeiou",
  "total_without_fee" : 5.962133916683182377482808078639209270477294921875,
  "role" : "aeiou",
  "redeem_txid" : "aeiou",
  "offer" : "aeiou",
  "expired" : true,
  "shipping" : 4.1456080298839363962315474054776132106781005859375,
  "arbiterfee" : 9.301444243932575517419536481611430644989013671875,
  "commission" : 7.061401241503109105224211816675961017608642578125,
  "currency" : "aeiou",
  "escrowaddress" : "aeiou",
  "height" : 1.231513536777255612975068288506008684635162353515625,
  "total_with_fee" : 1.46581298050294517310021547018550336360931396484375,
  "quantity" : 6.02745618307040320615897144307382404804229736328125,
  "witnessfee" : 2.027123023002321833274663731572218239307403564453125,
  "total_or_bid_in_payment_option_per_unit" : 2.3021358869347654518833223846741020679473876953125,
  "paymentoption" : "aeiou",
  "networkfee" : 3.61607674925191080461672754609026014804840087890625,
  "reseller" : "aeiou",
  "txid" : "aeiou",
  "buyer" : "aeiou",
  "offer_price" : "aeiou",
  "witness" : "aeiou",
  "arbiter" : "aeiou",
  "buynow" : true,
  "exttxid" : "aeiou",
  "deposit" : 7.3862819483858839220147274318151175975799560546875,
  "redeem_script" : "aeiou",
  "_id" : "aeiou",
  "time" : 0.80082819046101150206595775671303272247314453125,
  "bid_in_offer_currency_per_unit" : 5.63737665663332876420099637471139430999755859375,
  "status" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new arbitrated Syscoin escrow.
 *
 * request EscrowNewRequest 
 * returns List
 **/
exports.escrownew = function(request) {
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
 * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
 *
 * request EscrowRefundRequest 
 * returns List
 **/
exports.escrowrefund = function(request) {
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
 * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
 *
 * request EscrowReleaseRequest 
 * returns List
 **/
exports.escrowrelease = function(request) {
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

