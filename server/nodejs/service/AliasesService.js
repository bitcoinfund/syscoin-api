var syscoinClient = require('../index').syscoinClient;


/**
 * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
 *
 * alias String The syscoin alias to get balance for
 * returns Object
 **/
exports.aliasbalance = function(alias) {

    try {
        const result = await syscoinClient.aliasbalance(alias);
        console.log('Alias balance:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * Clear your whitelist(controls who can resell).
 *
 * owneralias String 
 * witness String  (optional)
 * returns Object
 **/
exports.aliasclearwhitelist = function(owneralias,witness) {
    try {
        const result = await syscoinClient.aliasclearwhitelist(owneralias, witness);
        console.log('Alias clear whitelist:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * scan and filter aliases
 *
 * query String Generic filter query to pass into syscoinquery
 * count number The number of results to return (optional)
 * sortfield Which field to sort on, empty means none
 * sortdirection Which direction to sort sortfield, 1 for ascending and -1 for descending
 * returns List
 **/
exports.aliasfilter = function (query, count, sortfield, sortdirection) {

    try {
        var opts = "{'limit': {'$numberInt': '" + count + "'}}";
        if (sortfield && sortdirection) {
            opts += ", {'sort': {'" + sortfield + "': '" + sortdirection + "'}}";
        }
        const result = await syscoinClient.syscoinquery("alias", query, opts);
        console.log('Alias filter:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * List all stored values of an alias.
 *
 * query String Generic filter query to pass into syscoinquery
 * count number The number of results to return (optional)
 * sortfield Which field to sort on, empty means none
 * sortdirection Which direction to sort sortfield, 1 for ascending and -1 for descending
 * returns List
 **/
exports.aliashistory = function (query, count, sortfield, sortdirection) {
    try {
        var opts = "{'limit': {'$numberInt': '" + count + "'}}";
        if (sortfield && sortdirection) {
            opts += ", {'sort': {'" + sortfield + "': '" + sortdirection + "'}}";
        }
        const result = await syscoinClient.syscoinquery("aliashistory", query, opts);
        console.log('Alias history:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * Show values of an alias.
 *
 * aliasname String 
 * returns Alias
 **/
exports.aliasinfo = function(aliasname) {
    try {
        const result = await syscoinClient.aliasinfo(aliasname);
        console.log('Alias info:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request AliasNewRequest 
 * returns List
 **/
exports.aliasnew = async (request) => {
  //Note3: this is done to control explicit ordering. Theoretically we could probably use some combo of Object.keys()
  //       and generator functions or Dict to reduce the boilerplate for each function.
  const aliasname = request.aliasname;
  const publicvalue = request.publicValue;
  const accepttransfers = request.acceptTransfers;
  const expire_timestamp = request.expire_timestamp;
  const address = request.address;
  const encryption_privatekey = request.encryption_privatekey;
  const encryption_publickey = request.encryption_publickey;
  const witness = request.witness;

  try {
    const result = await syscoinClient.aliasNew(aliasname, publicvalue, accepttransfers, expire_timestamp, address, encryption_privatekey, encryption_publickey, witness);
    console.log('Alias new:', result);
    return result;
  }catch(e) {
    throw e;
  }
}


/**
 * Send multiple times from an alias. Amounts are double-precision floating point numbers.
 *
 * request AliasPayRequest 
 * returns List
 **/
exports.aliaspay = function (request) {
    const aliasname = request.alias;
    const currency = request.currency;
    const amounts = request.amounts;
    const minconf = request.minconf;
    const comment = request.comment;
    try {
        const result = await syscoinClient.aliaspay(aliasname, currency, amounts, minconf, comment);
        console.log('Alias pay:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * List all stored transactions related to an alias.
 *
 * query String Generic filter query to pass into syscoinquery
 * count number The number of results to return (optional)
 * sortfield Which field to sort on, empty means none
 * sortdirection Which direction to sort sortfield, 1 for ascending and -1 for descending
 * returns List
 **/
exports.aliastxhistory = function (query, count, sortfield, sortdirection) {
    try {
        var opts = "{'limit': {'$numberInt': '" + count + "'}}";
        if (sortfield && sortdirection) {
            opts += ", {'sort': {'" + sortfield + "': '" + sortdirection + "'}}";
        }
        const result = await syscoinClient.syscoinquery("aliastxhistory", query, opts);
        console.log('Alias tx history:', result);
        return result;
    } catch (e) {
        throw e;
    }
}
}


/**
 * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
 *
 * request AliasUpdateRequest 
 * returns List
 **/
exports.aliasupdate = function(request) {
    const aliasname = request.aliasname;
    const publicvalue = request.publicValue;
    const address = request.address;
    const accepttransfers = request.acceptTransfers;
    const expire_timestamp = request.expire_timestamp;
    const encryption_privatekey = request.encryption_privatekey;
    const encryption_publickey = request.encryption_publickey;
    const witness = request.witness;

    try {
        const result = await syscoinClient.aliasUpdate(aliasname, publicvalue, address, accepttransfers, expire_timestamp, encryption_privatekey, encryption_publickey, witness);
        console.log('Alias update:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
 *
 * request AliasUpdateWhitelistRequest 
 * returns List
 **/
exports.aliasupdatewhitelist = function (request) {
    const aliasname = request.owneralias;
    const entries = request.entries;
    const witness = request.witness;
    try {
        const result = await syscoinClient.aliasupdatewhitelist(aliasname, entries, witness);
        console.log('Alias update whitelist:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * List all affiliates for this alias.
 *
 * alias String 
 * witness String  (optional)
 * returns List
 **/
exports.aliaswhitelist = function(alias,witness) {
    try {
        const result = await syscoinClient.aliaswhitelist(alias, witness);
        console.log('Alias whitelist:', result);
        return result;
    } catch (e) {
        throw e;
    }
}


/**
 * Clean expired Syscoin services from indexer and internal database.
 *
 * returns Object
 **/
exports.prunesyscoinservices = function() {
    try {
        const result = await syscoinClient.prunesyscoinservices();
        console.log('prunesyscoinservices:', result);
        return result;
    } catch (e) {
        throw e;
    }
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
    try {
        const result = await syscoinClient.syscoinquery(collection, query, options);
        console.log('syscoinquery:', result);
        return result;
    } catch (e) {
        throw e;
    }
}

