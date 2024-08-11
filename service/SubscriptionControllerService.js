'use strict';


/**
 * Purchase a subscription plan
 * Processes a subscription purchase based on the specified `planId`. The response includes details about the purchase status.
 *
 * planId Integer The unique identifier of the subscription plan to be purchased.
 * returns VNPayResponse
 **/
exports.purchaseSubscription = function(planId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "code",
  "paymentUrl" : "paymentUrl",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * VNPay subscription callback
 * Handles callback requests from VNPay after a subscription purchase. This endpoint processes the callback and returns a response.
 *
 * returns String
 **/
exports.vnPayCallback = function() {
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

