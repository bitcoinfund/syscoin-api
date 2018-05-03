const config = require('../../config');

function reportError(response, errorStr) {
  response.statusCode = 500;
  const errObj = parseError(errorStr);

  if(errObj) {
    return response.end(`${errObj.code} - ${errObj.message}`);
  }

  return response.end(JSON.stringify(errorStr.toString()));
}

function parseError(errorStr) {
  console.log("Error: " + errorStr);
  //transform the RPC Error into a more Syscoin-specific error while maintaining the 500 status
  const rpcErrorStr = "RpcError: 500 "; //with trailing space!
  let errObjStartIndex = errorStr.toString().indexOf(rpcErrorStr);
  let errObj;
  
  if (errObjStartIndex >= 0) {
    let errObjStr = errorStr.toString().substr(rpcErrorStr.length-1);
    errObj = JSON.parse(errObjStr);
    return errObj;
  }
  return null;  
}

/**
 *
 * @param args Values to be logged, last value should be the reporting method name (string)
 */
function log(...args) {
  // Temporary fix for the original logging so that in absence of config we exit.
  if (!config) {
    console.log(args);
    return;
  }
  if (!config.methodsWithLoggingDisabled) {
    console.log(args);
    return;
  }
  const reportingMethod = args[args.length-1];
  if(config.methodsWithLoggingDisabled.length > 0 && config.methodsWithLoggingDisabled.filter((item) => {
    return item == reportingMethod;
  }).length > 0) {
    console.log(reportingMethod + " not logged because disabled");
    return; //if the reportingMethod is in the array of methods w logging disabled, dont log it!
  }

  console.log(args);
}

module.exports.reportError = reportError;
module.exports.log = log;