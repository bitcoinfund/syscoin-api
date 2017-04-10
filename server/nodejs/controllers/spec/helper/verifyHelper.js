var expect  = require("chai").expect;

function verifySyscoinAddress(address) {
  expect(address.length).to.equal(34);
}

function verifyTransactionId(txid) {
  expect(txid.length).to.equal(64);
}

module.exports.verifySyscoinAddress = verifySyscoinAddress;
module.exports.verifyTransactionId =
  verifyTransactionId;