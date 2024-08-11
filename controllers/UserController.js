'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');

module.exports.getAuthUserInfo = function getAuthUserInfo (req, res, next) {
  UserController.getAuthUserInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next, id) {
  UserController.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
