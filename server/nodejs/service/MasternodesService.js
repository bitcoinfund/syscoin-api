'use strict';


/**
 * Returns an object containing governance parameters
 *
 * returns GovernanceInfoResponse
 **/
exports.getgovernanceinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nextsuperblock" : 2.3021358869347654518833223846741020679473876953125,
  "proposalfee" : 1.46581298050294517310021547018550336360931396484375,
  "lastsuperblock" : 5.63737665663332876420099637471139430999755859375,
  "masternodewatchdogmaxseconds" : 6.02745618307040320615897144307382404804229736328125,
  "governanceminquorum" : 0.80082819046101150206595775671303272247314453125,
  "superblockcycle" : 5.962133916683182377482808078639209270477294921875
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns an object containing mixing pool related information
 *
 * returns PoolInfoResponse
 **/
exports.getpoolinfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mixing_mode" : "aeiou",
  "entries" : 6.02745618307040320615897144307382404804229736328125,
  "warnings" : "aeiou",
  "state" : "aeiou",
  "addr" : "aeiou",
  "queue" : 0.80082819046101150206595775671303272247314453125,
  "outpoint" : "aeiou",
  "status" : "aeiou",
  "keys_left" : "aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the absolute maximum sum of superblock payments allowed.
 *
 * height String Block height to check for superblock budget
 * returns String
 **/
exports.getsuperblockbudget = function(height) {
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
 * Manage governance objects.
 *
 * command String 'check' - Validate governance object data (proposal only) 'prepare' - Prepare governance object by signing and creating tx 'submit' - Submit governance object to network 'deserialize' - Deserialize governance object from hex string to JSON 'count' - Count governance objects and votes 'get' - Get governance object by hash 'getvotes' - Get all votes for a governance object hash (including old votes) 'getcurrentvotes' - Get only current (tallying) votes for a governance object hash (does not include old votes) 'list' - List governance objects (can be filtered by signal and/or object type) 'diff' - List differences since last diff 'vote-alias' - Vote on a governance object by masternode alias (using masternode.conf setup) 'vote-conf' - Vote on a governance object by masternode configured in syscoin.conf 'vote-many'- Vote on a governance object by all masternodes (using masternode.conf setup)     
 * no response value expected for this operation
 **/
exports.gobject = function(command) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set of commands to execute masternode related actions.
 *
 * command String 'count' - Print number of all known masternodes (optional 'ps', 'enabled', 'all', 'qualify') 'current' - Print info on current masternode winner to be paid the next block (calculated locally) 'debug' - Print masternode status 'genkey' - Generate new masternodeprivkey 'outputs' - Print masternode compatible outputs 'start' - Start local Hot masternode configured in syscoin.conf 'start-alias' - Start single remote masternode by assigned alias configured in masternode.conf 'start-[mode]' - Start remote masternodes configured in masternode.conf ([mode] can be one of 'all', 'missing', or 'disabled') 'status' - Print masternode status information 'list' - Print list of all known masternodes (see masternodelist for more info) 'list-conf' - Print masternode.conf in JSON format 'winner' - Print info on next masternode winner to vote for 'winners'- Print list of masternode winners          
 * no response value expected for this operation
 **/
exports.masternode = function(command) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set of commands to create and relay masternode broadcast messages.
 *
 * command String 'create-alias' - Create single remote masternode broadcast message by assigned alias configured in masternode.conf 'create-all' - Create remote masternode broadcast messages for all masternodes configured in masternode.conf 'decode' - Decode masternode broadcast message 'relay' - Relay masternode broadcast message to the network 
 * no response value expected for this operation
 **/
exports.masternodebroadcast = function(command) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of masternodes in different modes.
 *
 * mode String (optional/required to use filter, defaults = status) The mode to run list in 'activeseconds' - Print number of seconds masternode recognized by the network as enabled (since latest issued \\\"masternode start/start-many/start-alias\\\") 'addr' - Print ip address associated with a masternode (can be additionally filtered, partial match) 'full' - Print info in format 'status protocol payee lastseen activeseconds lastpaidtime lastpaidblock IP' (can be additionally filtered, partial match) 'info' - Print info in format 'status protocol payee lastseen activeseconds sentinelversion sentinelstate IP' (can be additionally filtered, partial match) 'lastpaidblock' - Print the last block height a node was paid on the network 'lastpaidtime' - Print the last time a node was paid on the network 'lastseen' - Print timestamp of when a masternode was last seen on the network 'payee' - Print Syscoin address associated with a masternode (can be additionally filtered,partial match) 'protocol' - Print protocol of a masternode (can be additionally filtered, exact match) 'pubkey' - Print the masternode (not collateral) public key 'rank' - Print rank of a masternode based on current block 'status' - Print masternode status PRE_ENABLED / ENABLED / EXPIRED / WATCHDOG_EXPIRED / NEW_START_REQUIRED / UPDATE_REQUIRED / POSE_BAN / OUTPOINT_SPENT (can be additionally filtered, partial match)  (optional)
 * no response value expected for this operation
 **/
exports.masternodelist = function(mode) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Anonymous mixing and sending coins.
 *
 * command String 'start' - Start Mixing 'stop' - Stop mixing 'reset' - Reset mixing 
 * returns String
 **/
exports.privatesend = function(command) {
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
 * Keep-alive message for masternode via TCP ping requests.
 *
 * version String Sentinel version in the form 'x.x.x'
 * no response value expected for this operation
 **/
exports.sentinelping = function(version) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Compile and relay a governance vote with provided external signature instead of signing vote internally.
 *
 * request VoteRawRequest 
 * returns String
 **/
exports.voteraw = function(request) {
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

