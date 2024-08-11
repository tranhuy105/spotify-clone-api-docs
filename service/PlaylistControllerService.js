'use strict';


/**
 * Add a track to the end of a playlist
 * Adds a specified track to the end of the playlist identified by `playlistId`. The track is identified by `track_id` provided as a query parameter.
 *
 * playlistId Long The unique identifier of the playlist to which the track will be added.
 * track_id Long The unique identifier of the track to be added to the playlist.
 * no response value expected for this operation
 **/
exports.addTrackToEnd = function(playlistId,track_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new playlist
 * Creates a new playlist with the details provided in the request body.
 *
 * body PlaylistDto The request body should contain the details of the new playlist to be created.
 * no response value expected for this operation
 **/
exports.createPlaylist = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove a track from a playlist
 * Removes the track specified by `trackId` from the playlist specified by `playlistId`.
 *
 * playlistId Long The unique identifier of the playlist from which the track will be removed.
 * trackId Long The unique identifier of the track to be removed.
 * no response value expected for this operation
 **/
exports.deleteTrack = function(playlistId,trackId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all tracks in a playlist
 * Retrieves all tracks in the playlist identified by `id`. Optionally, the results can be paginated using the `page` parameter.
 *
 * id Long The unique identifier of the playlist.
 * page Integer The page number for pagination (optional). (optional)
 * returns PagePlaylistTrack
 **/
exports.findAllPlaylistTracks = function(id,page) {
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
 * Retrieve a playlist by ID
 * Fetches detailed information about a specific playlist using its unique identifier.
 *
 * id Long The unique identifier of the playlist to retrieve.
 * returns Playlist
 **/
exports.findPlaylistById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coverUrl" : "coverUrl",
  "name" : "name",
  "description" : "description",
  "isPublic" : true,
  "id" : 0,
  "userId" : 6,
  "totalTrack" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Move a track within a playlist
 * Moves a specified track within a playlist to a new position. The position is defined by the `new_position` query parameter.
 *
 * playlistId Long The unique identifier of the playlist containing the track.
 * trackId Long The unique identifier of the track to be moved.
 * new_position Long The new position in the playlist where the track should be moved to. Positions are zero-based.
 * no response value expected for this operation
 **/
exports.moveTrack = function(playlistId,trackId,new_position) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search for playlists
 * Searches for playlists based on the provided query and optional page parameter for pagination.
 *
 * q String The search query for finding playlists.
 * page Integer The page number for pagination (optional). (optional)
 * returns PagePlaylist
 **/
exports.searchPlaylist = function(q,page) {
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
    "coverUrl" : "coverUrl",
    "name" : "name",
    "description" : "description",
    "isPublic" : true,
    "id" : 0,
    "userId" : 6,
    "totalTrack" : 1
  }, {
    "coverUrl" : "coverUrl",
    "name" : "name",
    "description" : "description",
    "isPublic" : true,
    "id" : 0,
    "userId" : 6,
    "totalTrack" : 1
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
 * Update a playlist by ID
 * Updates the details of a specific playlist using its unique identifier. The playlist data is provided in the request body.
 *
 * body PlaylistDto The updated details of the playlist.
 * id Long The unique identifier of the playlist to be updated.
 * no response value expected for this operation
 **/
exports.updatePlaylist = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

