'use strict';

var utils = require('../utils/writer.js');
var AuthenticationController = require('../service/AuthenticationControllerService');

module.exports.login = function login (req, res, next, body) {
  AuthenticationController.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next, body) {
  AuthenticationController.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
