var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var config = require('../config');
var rpcuser = require('../index').rpcuser;
var rpcpass = require('../index').rpcpass;
var mongoUtils = require('../utils/mongoUtils');


/**
 * Returns a session token for use with subsquent protected calls.
 *
 * auth String SHA1 hash of the user's authentication information- usernamepassword.
 * returns LoginResponse
 **/
exports.login = async (auth) => {
  const validAuth = new Hashes.SHA1().hex(rpcuser + rpcpass);
  console.log("Valid pass:" + validAuth + " vs " + auth);

  if (auth != validAuth) {
    return { success: false, message: 'Authentication failed. Wrong password.' };
  } else {
    // if user is found and password is right, create a token
    const token = jwt.sign({ auth: validAuth }, config.api_secret, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    return {
      success: true,
      message: 'Enjoy your token!',
      token: token
    };
  }
};

/**
 * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
 *
 * request StoreDataRequest 
 * returns StoreDataResponse
 **/
exports.storedata = async (request) => {
  const existingDataId = request.existingDataId;
  const dataType = "aliasdata"; //args.request.value.dataType;
  const data = request.data;

  try {
    const db = await MongoClient.connect(config.mongodb.database_url);
    const collection = db.collection("aliasdata"); //TODO: change collectionName to variable
    console.log("storing data offchain: " + data);

    let filter;
    const newId = new ObjectID();
    if(existingDataId) {
      try {
        filter = {_id: ObjectID(existingDataId), dataType: dataType};
        let docs = await collection.find(filter).toArray();
        if(docs.length > 1) {
          return { success: false, message: `Data id ${existingDataId} returned ${docs.length} matches, too many!` };
        }else if(docs.length == 0) {
          console.log("No matches found for provided ID, creating new ID.");
          filter._id = newId;
        }
      }catch(e) { //objectid error, create new id
        console.log("Object ID error create new ID.");
        filter = { _id: newId, dataType: dataType};
      }
    } else {
      filter = { _id: newId, dataType: dataType};
    }

    try {
      const result = await mongoUtils.upsertDocument(collection, filter, { dataType: 'aliasdata', data: data });
      let ret = {
        storeLocations: [
          { dataUrl: config.mongodb.offchain_url + result.upsertedId }
        ]
      };
      res.end(JSON.stringify(ret));
    }catch(err) {
      return { success: false, message: 'Error inserting data into offchain data storage service. Details: ' + JSON.stringify(err) };
    }
  }catch(err) {
    return { success: false, message: 'Error connecting from API to data storage service. Details: ' + JSON.stringify(err) };
  }
};

