'use strict';


/**
 * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
 *
 * request AddMultisigAddressRequest 
 * returns String
 **/
exports.addmultisigaddress = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
 *
 * address String The syscoin address for the private key
 * returns String
 **/
exports.dumpprivkey = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Dumps all wallet keys in a human-readable format.
 *
 * filename String The filename
 * returns String
 **/
exports.dumpwallet = function(filename) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
 *
 * request EncryptWalletRequest 
 * returns String
 **/
exports.encryptwallet = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED. Returns the account associated with the given address.
 *
 * syscoinaddress String The syscoin address for account lookup.
 * returns String
 **/
exports.getaccount = function(syscoinaddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
 *
 * account String The account name for the address. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
 * returns String
 **/
exports.getaccountaddress = function(account) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the balance for addresses or aliases
 *
 * addresses List 
 * returns Object
 **/
exports.getaddressbalance = function(addresses) {
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
 * Returns all unspent outputs for addresses or aliases
 *
 * addresses List 
 * returns List
 **/
exports.getaddressutxos = function(addresses) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "outputIndex" : 0.80082819046101150206595775671303272247314453125,
  "address" : "aeiou",
  "txid" : "aeiou",
  "script" : "aeiou",
  "satoshis" : 6.02745618307040320615897144307382404804229736328125,
  "height" : 1.46581298050294517310021547018550336360931396484375
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
 *
 * account String DEPRECATED. The selected account, or \"*\" for entire wallet. It may be the default account using \"\". (optional)
 * minconf BigDecimal Only include transactions confirmed at least this many times. (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * includeWatchonly Boolean Also include balance in watchonly addresses (see 'importaddress') (optional)
 * returns BigDecimal
 **/
exports.getbalance = function(account,minconf,addlockconf,includeWatchonly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
 *
 * hash String 
 * verbose Boolean  (optional)
 * returns GetBlockResponse
 **/
exports.getblock = function(hash,verbose) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tx" : [ "aeiou" ],
  "mediantime" : 9.301444243932575517419536481611430644989013671875,
  "data" : "aeiou",
  "previousblockhash" : "aeiou",
  "bits" : "aeiou",
  "weight" : 5.962133916683182377482808078639209270477294921875,
  "versionHex" : "aeiou",
  "confirmations" : 0.80082819046101150206595775671303272247314453125,
  "version" : 2.3021358869347654518833223846741020679473876953125,
  "nonce" : 3.61607674925191080461672754609026014804840087890625,
  "nextblockhash" : "aeiou",
  "difficulty" : 2.027123023002321833274663731572218239307403564453125,
  "chainwork" : "aeiou",
  "size" : 6.02745618307040320615897144307382404804229736328125,
  "merkleroot" : "aeiou",
  "strippedsize" : 1.46581298050294517310021547018550336360931396484375,
  "time" : 7.061401241503109105224211816675961017608642578125,
  "hash" : "aeiou",
  "height" : 5.63737665663332876420099637471139430999755859375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns an object containing various state info regarding block chain processing.
 *
 * returns GetBlockchainInfoResponse
 **/
exports.getblockchaininfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "difficulty" : 1.46581298050294517310021547018550336360931396484375,
  "headers" : 6.02745618307040320615897144307382404804229736328125,
  "bip9_softforks" : "{}",
  "chain" : "aeiou",
  "chainwork" : "aeiou",
  "mediantime" : 5.962133916683182377482808078639209270477294921875,
  "verificationprogress" : 5.63737665663332876420099637471139430999755859375,
  "blocks" : 0.80082819046101150206595775671303272247314453125,
  "pruned" : true,
  "softforks" : [ "{}" ],
  "pruneheight" : 2.3021358869347654518833223846741020679473876953125,
  "bestblockhash" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the number of blocks in the longest block chain.
 *
 * returns BigDecimal
 **/
exports.getblockcount = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns an object containing various state info.
 *
 * returns Info
 **/
exports.getinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "protocolversion" : 1.46581298050294517310021547018550336360931396484375,
  "relayfee" : 1.024645700144157789424070870154537260532379150390625,
  "timeoffset" : 7.061401241503109105224211816675961017608642578125,
  "blocks" : 2.3021358869347654518833223846741020679473876953125,
  "version" : 0.80082819046101150206595775671303272247314453125,
  "keypoolsize" : 4.1456080298839363962315474054776132106781005859375,
  "unlocked_until" : 7.3862819483858839220147274318151175975799560546875,
  "paytxfee" : 1.231513536777255612975068288506008684635162353515625,
  "dashversion" : 6.02745618307040320615897144307382404804229736328125,
  "difficulty" : 3.61607674925191080461672754609026014804840087890625,
  "proxy" : "aeiou",
  "walletversion" : 5.962133916683182377482808078639209270477294921875,
  "balance" : 5.63737665663332876420099637471139430999755859375,
  "keypoololdest" : 2.027123023002321833274663731572218239307403564453125,
  "testnet" : true,
  "connections" : 9.301444243932575517419536481611430644989013671875,
  "errors" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a json object containing mining-related information.
 *
 * returns MiningInfo
 **/
exports.getmininginfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "difficulty" : 5.962133916683182377482808078639209270477294921875,
  "chain" : "aeiou",
  "currentblocktx" : 1.46581298050294517310021547018550336360931396484375,
  "blocks" : 0.80082819046101150206595775671303272247314453125,
  "networkhashps" : 2.3021358869347654518833223846741020679473876953125,
  "currentblocksize" : 6.02745618307040320615897144307382404804229736328125,
  "genproclimit" : 5.63737665663332876420099637471139430999755859375,
  "testnet" : true,
  "pooledtx" : 7.061401241503109105224211816675961017608642578125,
  "generate" : true,
  "errors" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a json object containing network-related information.
 *
 * returns NetworkInfo
 **/
exports.getnetworkinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "localaddresses" : [ "aeiou" ],
  "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
  "relayfee" : 5.63737665663332876420099637471139430999755859375,
  "subversion" : "aeiou",
  "timeoffset" : 1.46581298050294517310021547018550336360931396484375,
  "warnings" : "aeiou",
  "localrelay" : true,
  "networks" : [ {
    "proxy" : "aeiou",
    "limited" : true,
    "proxy_randomize_credentials" : true,
    "name" : "aeiou",
    "reachable" : true
  } ],
  "version" : 0.80082819046101150206595775671303272247314453125,
  "connections" : 5.962133916683182377482808078639209270477294921875,
  "localservices" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
 *
 * request GetNewAddressRequest  (optional)
 * returns String
 **/
exports.getnewaddress = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns data about each connected network node as a json array of objects.
 *
 * returns PeerInfoResponse
 **/
exports.getpeerinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
 *
 * account String The selected account, may be the default account using \"\".
 * minconf BigDecimal Only include transactions confirmed at least this many times. (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * returns BigDecimal
 **/
exports.getreceivedbyaccount = function(account,minconf,addlockconf) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
 *
 * syscoinaddress String The syscoin address for transactions.
 * minconf BigDecimal Only include transactions confirmed at least this many times. (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * returns BigDecimal
 **/
exports.getreceivedbyaddress = function(syscoinaddress,minconf,addlockconf) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get detailed information about in-wallet transaction <txid>
 *
 * txid String The transaction id
 * includeWatchonly Boolean Whether to include watchonly addresses in balance calculation and details[] (optional)
 * returns Transaction
 **/
exports.gettransaction = function(txid,includeWatchonly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "aeiou",
  "blockhash" : "aeiou",
  "timereceived" : 5.63737665663332876420099637471139430999755859375,
  "instantlock" : true,
  "blocktime" : 1.46581298050294517310021547018550336360931396484375,
  "bip125-replaceable" : "aeiou",
  "txid" : "aeiou",
  "details" : [ {
    "amount" : 2.3021358869347654518833223846741020679473876953125,
    "address" : "aeiou",
    "label" : "aeiou",
    "category" : "aeiou",
    "account" : "aeiou",
    "vout" : 7.061401241503109105224211816675961017608642578125
  } ],
  "hex" : "aeiou",
  "time" : 5.962133916683182377482808078639209270477294921875,
  "confirmations" : 0.80082819046101150206595775671303272247314453125,
  "blockindex" : 6.02745618307040320615897144307382404804229736328125
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the server's total unconfirmed balance
 *
 * returns BigDecimal
 **/
exports.getunconfirmedbalance = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns wallet balance for all accounts. Does not include watch only accounts.
 *
 * returns BigDecimal
 **/
exports.getwalletbalance = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns an object containing various wallet state info.
 *
 * returns WalletInfo
 **/
exports.getwalletinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "walletversion" : 0.80082819046101150206595775671303272247314453125,
  "balance" : 6.02745618307040320615897144307382404804229736328125,
  "txcount" : 5.63737665663332876420099637471139430999755859375,
  "keypoololdest" : 2.3021358869347654518833223846741020679473876953125,
  "keypoolsize_hd_internal" : 9.301444243932575517419536481611430644989013671875,
  "unconfirmed_balance" : 1.46581298050294517310021547018550336360931396484375,
  "hdchainid" : "aeiou",
  "immature_balance" : 5.962133916683182377482808078639209270477294921875,
  "keypoolsize" : 7.061401241503109105224211816675961017608642578125,
  "unlocked_until" : 3.61607674925191080461672754609026014804840087890625,
  "paytxfee" : 2.027123023002321833274663731572218239307403564453125
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
 *
 * request ImportAddressRequest 
 * returns String
 **/
exports.importaddress = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a private key (as returned by dumpprivkey) to your wallet.
 *
 * request ImportPrivKeyRequest 
 * returns String
 **/
exports.importprivkey = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
 *
 * request ImportPubKeyRequest 
 * returns String
 **/
exports.importpubkey = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Imports keys from a wallet dump file (see dumpwallet).
 *
 * request ImportWalletRequest 
 * returns String
 **/
exports.importwallet = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED. Returns Object that has account names as keys, account balances as values.
 *
 * minconf BigDecimal Only include transactions with at least this many confirmations (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * includeWatchonly Boolean Include balances in watchonly addresses (see 'importaddress') (optional)
 * returns Object
 **/
exports.listaccounts = function(minconf,addlockconf,includeWatchonly) {
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
 * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
 *
 * returns List
 **/
exports.listaddressgroupings = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "syscoinaddress" : "aeiou",
  "account" : "aeiou"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED. List balances by account.
 *
 * minconf BigDecimal Only include transactions confirmed at least this many times. (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * includeempty Boolean Whether to include accounts that haven't received any payments. (optional)
 * includeWatchonly Boolean Whether to include watchonly addresses (see 'importaddress'). (optional)
 * returns List
 **/
exports.listreceivedbyaccount = function(minconf,addlockconf,includeempty,includeWatchonly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "involvesWatchonly" : true,
  "label" : "aeiou",
  "confirmations" : 6.02745618307040320615897144307382404804229736328125,
  "account" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List balances by receiving address.
 *
 * minconf BigDecimal Only include transactions confirmed at least this many times. (optional)
 * addlockconf Boolean Whether to add 5 confirmations to transactions locked via InstantSend (optional)
 * includeempty Boolean Whether to include accounts that haven't received any payments. (optional)
 * includeWatchonly Boolean Whether to include watchonly addresses (see 'importaddress'). (optional)
 * returns List
 **/
exports.listreceivedbyaddress = function(minconf,addlockconf,includeempty,includeWatchonly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "involvesWatchonly" : true,
  "label" : "aeiou",
  "confirmations" : 6.02745618307040320615897144307382404804229736328125,
  "account" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all transactions in blocks since block [blockhash], or all transactions if omitted
 *
 * blockhash String The block hash to list transactions since (optional)
 * includeWatchonly Boolean Whether to include watchonly addresses (see 'importaddress'). (optional)
 * targetConfirmations BigDecimal  (optional)
 * returns List
 **/
exports.listsinceblock = function(blockhash,includeWatchonly,targetConfirmations) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lastblock" : "aeiou",
  "transactions" : [ {
    "amount" : 0.80082819046101150206595775671303272247314453125,
    "address" : "aeiou",
    "instantlock" : true,
    "fee" : 1.46581298050294517310021547018550336360931396484375,
    "txid" : "aeiou",
    "label" : "aeiou",
    "confirmations" : 5.962133916683182377482808078639209270477294921875,
    "vout" : 6.02745618307040320615897144307382404804229736328125,
    "blockhash" : "aeiou",
    "timereceived" : 9.301444243932575517419536481611430644989013671875,
    "blocktime" : 2.3021358869347654518833223846741020679473876953125,
    "comment" : "aeiou",
    "time" : 7.061401241503109105224211816675961017608642578125,
    "to" : "aeiou",
    "category" : "aeiou",
    "blockindex" : 5.63737665663332876420099637471139430999755859375,
    "account" : "aeiou"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
 *
 * account String DEPRECATED. The account name. Should be \"*\". (optional)
 * count BigDecimal The number of transactions to return (optional)
 * from BigDecimal The number of transactions to skip (optional)
 * includeWatchonly Boolean Include transactions to watchonly addresses (see 'importaddress') (optional)
 * returns List
 **/
exports.listtransactions = function(account,count,from,includeWatchonly) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "address" : "aeiou",
  "instantlock" : true,
  "bip125-replaceable" : "aeiou",
  "fee" : 1.46581298050294517310021547018550336360931396484375,
  "txid" : "aeiou",
  "label" : "aeiou",
  "otheraccount" : "aeiou",
  "confirmations" : 5.962133916683182377482808078639209270477294921875,
  "vout" : 6.02745618307040320615897144307382404804229736328125,
  "blockhash" : "aeiou",
  "timereceived" : 7.061401241503109105224211816675961017608642578125,
  "trusted" : true,
  "blocktime" : 5.63737665663332876420099637471139430999755859375,
  "comment" : "aeiou",
  "time" : 2.3021358869347654518833223846741020679473876953125,
  "category" : "aeiou",
  "blockindex" : "aeiou",
  "account" : "aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request SendFromRequest 
 * returns String
 **/
exports.sendfrom = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request SendManyRequest 
 * returns String
 **/
exports.sendmany = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request SendToAddressRequest 
 * returns String
 **/
exports.sendtoaddress = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request SignMessageRequest 
 * returns String
 **/
exports.signmessage = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
 *
 * hexstring String 
 * returns Object
 **/
exports.syscoindecoderawtransaction = function(hexstring) {
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
 * Signed raw transaction (serialized, hex-encoded) sent out to the network.
 *
 * hexstring SendRawTransactionRequest 
 * returns String
 **/
exports.syscoinsendrawtransaction = function(hexstring) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return information about the given syscoin address.
 *
 * syscoinaddress String 
 * returns ValidateAddressResponse
 **/
exports.validateaddress = function(syscoinaddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "aeiou",
  "btcaddress" : "aeiou",
  "isscript" : true,
  "iscompressed" : true,
  "alias" : "aeiou",
  "ismine" : true,
  "isvalid" : true,
  "zaddress" : "aeiou",
  "iswatchonly" : true,
  "account" : "aeiou",
  "pubkey" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify a signed message
 *
 * syscoinaddress String The syscoin address to use for the signature.
 * signature String The signature provided by the signer in base 64 encoding (see signmessage).
 * message String The message that was signed.
 * returns Boolean
 **/
exports.verifymessage = function(syscoinaddress,signature,message) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
 *
 * returns String
 **/
exports.walletlock = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
 *
 * request WalletPassphraseRequest 
 * returns String
 **/
exports.walletpassphrase = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
 *
 * request WalletPassphraseChangeRequest 
 * returns String
 **/
exports.walletpassphrasechange = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

