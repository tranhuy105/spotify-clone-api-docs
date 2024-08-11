'use strict';


/**
 * Check if an artist is followed by the user
 * Checks if the artist specified by `artist_id` is followed by the user.
 *
 * artist_id Long The unique identifier of the artist to check.
 * returns Boolean
 **/
exports.checkIfUserFollow = function(artist_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check if a track is saved by the user
 * Checks if the track specified by `track_id` is saved in the user's library.
 *
 * track_id Long The unique identifier of the track to check.
 * returns Boolean
 **/
exports.checkIfUserSaved = function(track_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Follow an artist
 * Marks a specified artist as followed by the user.
 *
 * artist_id Long The unique identifier of the artist to be followed.
 * no response value expected for this operation
 **/
exports.followArtist = function(artist_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve followed artists
 * Fetches a list of artists that the user is following. The response includes pagination if the `page` query parameter is provided.
 *
 * page Integer The page number for pagination. If not provided, the first page of results is returned. (optional)
 * returns PageArtist
 **/
exports.getFollowingArtistList = function(page) {
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
 * Retrieve saved tracks
 * Fetches a list of tracks saved by the user. The response includes pagination if the `page` query parameter is provided.
 *
 * page Integer The page number for pagination. If not provided, the first page of results is returned. (optional)
 * returns PagePlaylistTrack
 **/
exports.getSavedTrack = function(page) {
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
    "addedAt" : "2000-01-23T04:56:07.000+00:00",
    "addedBy" : 2,
    "position" : 5,
    "track" : {
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
    }
  }, {
    "addedAt" : "2000-01-23T04:56:07.000+00:00",
    "addedBy" : 2,
    "position" : 5,
    "track" : {
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
    }
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
 * Like a track
 * Marks a specified track as liked by the user.
 *
 * track_id Long The unique identifier of the track to be liked.
 * no response value expected for this operation
 **/
exports.likeTrack = function(track_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unfollow an artist
 * Removes the follow status from a specified artist.
 *
 * artist_id Long The unique identifier of the artist to be unfollowed.
 * no response value expected for this operation
 **/
exports.unfollowArtist = function(artist_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unlike a track
 * Removes the like status from a specified track.
 *
 * track_id Long The unique identifier of the track to be unliked.
 * no response value expected for this operation
 **/
exports.unlikeTrack = function(track_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

