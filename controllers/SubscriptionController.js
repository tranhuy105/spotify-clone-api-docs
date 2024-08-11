'use strict';

var utils = require('../utils/writer.js');
var SubscriptionController = require('../service/SubscriptionControllerService');

module.exports.purchaseSubscription = function purchaseSubscription (req, res, next, planId) {
  SubscriptionController.purchaseSubscription(planId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vnPayCallback = function vnPayCallback (req, res, next) {
  SubscriptionController.vnPayCallback()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
