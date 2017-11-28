const utils = require('../utils/writer.js');
const Blockmarket = require('../service/BlockmarketService');

const rpcuser = require('../index').rpcuser;
const rpcpass = require('../index').rpcpass;

module.exports.login = function login(req, res, next) {
  const auth = req.swagger.params['auth'].value;
  console.log("Got auth with request:" + auth + " checkin against:" + rpcuser + rpcpass);
  Blockmarket.login(auth).then(result => {
    if (!result.success) {
      utils.writeJson(res, result, 401);
    } else {
      utils.writeJson(res, result);
    }
  }).catch(e => {
    utils.writeJson(res, e, 500);
  });
};

module.exports.storedata = function storedata(req, res, next) {
  var request = req.swagger.params['request'].value;
  Blockmarket.storedata(request).then(result => {
    if(result.success != undefined) {
      utils.writeJson(res, result, 500);
    }else{
      utils.writeJson(res, result);
    }
  }).catch(e => {
    utils.writeJson(res, e, 500);
  });
};
