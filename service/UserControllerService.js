'use strict';


/**
 * Get authenticated user information
 * Retrieves information about the currently authenticated user.
 *
 * returns User
 **/
exports.getAuthUserInfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accountLocked" : true,
  "firstname" : "firstname",
  "password" : "password",
  "dob" : "2000-01-23",
  "roles" : [ {
    "name" : "name",
    "id" : 6
  }, {
    "name" : "name",
    "id" : 6
  } ],
  "id" : 0,
  "isPremium" : true,
  "email" : "email",
  "enabled" : true,
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by ID
 * Retrieves information about a user specified by their `id`.
 *
 * id Long The unique identifier of the user to be retrieved.
 * returns UserDto
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "firstname",
  "dob" : "2000-01-23",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "isPremium" : true,
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

