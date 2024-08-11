'use strict';


/**
 * Search for tracks
 * Searches for tracks based on the provided query and optional page parameter for pagination.
 *
 * q String The search query for finding tracks.
 * page Integer The page number for pagination (optional). (optional)
 * returns PageTrackDetail
 **/
exports.getAllTrack = function(q,page) {
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
    "duration" : 9,
    "album" : {
      "coverUrl" : "coverUrl",
      "artists" : [ {
        "profilePictureUrl" : "profilePictureUrl",
        "stageName" : "stageName",
        "role" : "role",
        "id" : 4
      }, {
        "profilePictureUrl" : "profilePictureUrl",
        "stageName" : "stageName",
        "role" : "role",
        "id" : 4
      } ],
      "id" : 2,
      "title" : "title"
    },
    "id" : 7,
    "streamCount" : 3,
    "title" : "title"
  }, {
    "duration" : 9,
    "album" : {
      "coverUrl" : "coverUrl",
      "artists" : [ {
        "profilePictureUrl" : "profilePictureUrl",
        "stageName" : "stageName",
        "role" : "role",
        "id" : 4
      }, {
        "profilePictureUrl" : "profilePictureUrl",
        "stageName" : "stageName",
        "role" : "role",
        "id" : 4
      } ],
      "id" : 2,
      "title" : "title"
    },
    "id" : 7,
    "streamCount" : 3,
    "title" : "title"
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
 * Get track by ID
 * Retrieves detailed information about a track specified by its `id`.
 *
 * id Long The unique identifier of the track to be retrieved.
 * returns TrackDetail
 **/
exports.getTrackById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "duration" : 9,
  "album" : {
    "coverUrl" : "coverUrl",
    "artists" : [ {
      "profilePictureUrl" : "profilePictureUrl",
      "stageName" : "stageName",
      "role" : "role",
      "id" : 4
    }, {
      "profilePictureUrl" : "profilePictureUrl",
      "stageName" : "stageName",
      "role" : "role",
      "id" : 4
    } ],
    "id" : 2,
    "title" : "title"
  },
  "id" : 7,
  "streamCount" : 3,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload a new track
 * Uploads a new track and associates it with a specified album. The track's title and album ID are provided as query parameters, and the track file is included in the request body.
 *
 * body Api_tracks_body The request body should contain the binary file of the track to be uploaded. (optional)
 * album_id Long The unique identifier of the album to which the track will be associated.
 * title String The title of the track being uploaded.
 * no response value expected for this operation
 **/
exports.uploadTrack = function(body,album_id,title) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

