'use strict';


/**
 * Create a new artist profile
 * Creates a new artist profile with the details provided in the request body.
 *
 * body CreateArtistProfileRequestDto The request body should contain the details of the artist to be created.
 * no response value expected for this operation
 **/
exports.createArtistProfile = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search for artists
 * Searches for artists based on the provided query and optional page parameter for pagination.
 *
 * q String The search query for finding artists.
 * page Integer The page number for pagination (optional). (optional)
 * returns PageArtist
 **/
exports.findAllArtist = function(q,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalItems" : 1,
  "size" : 6,
  "totalPages" : 5,
  "hasPrevious" : true,
  "hasNext" : true,
  "page" : 0,
  "items" : [ {
    "profilePictureUrl" : "profilePictureUrl",
    "stageName" : "stageName",
    "bio" : "bio",
    "id" : 5,
    "followerCount" : 2
  }, {
    "profilePictureUrl" : "profilePictureUrl",
    "stageName" : "stageName",
    "bio" : "bio",
    "id" : 5,
    "followerCount" : 2
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get artist by ID
 * Retrieves detailed information about an artist specified by `id`.
 *
 * id Long The unique identifier of the artist to be retrieved.
 * returns ArtistProfile
 **/
exports.findArtistById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profilePictureUrl" : "profilePictureUrl",
  "albums" : [ {
    "coverUrl" : "coverUrl",
    "role" : "role",
    "releaseDate" : "2000-01-23",
    "isSingle" : true,
    "id" : "id",
    "title" : "title"
  }, {
    "coverUrl" : "coverUrl",
    "role" : "role",
    "releaseDate" : "2000-01-23",
    "isSingle" : true,
    "id" : "id",
    "title" : "title"
  } ],
  "stageName" : "stageName",
  "bio" : "bio",
  "id" : 0,
  "followerCount" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

