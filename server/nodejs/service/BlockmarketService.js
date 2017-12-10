var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');

var config = require('../config');
var rpcuser = require('../index').rpcuser;
var rpcpass = require('../index').rpcpass;

/**
 * Returns a session token for use with subsquent protected calls.
 *
 * auth String SHA1 hash of the user's authentication information- usernamepassword.
 * returns LoginResponse
 **/
exports.login = async (auth) => {
  const validAuth = new Hashes.SHA1().hex(rpcuser + rpcpass);
  console.log("Valid pass:" + validAuth + " vs " + auth);

  if (auth !== validAuth) {
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
