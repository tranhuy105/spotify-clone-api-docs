'use strict';


/**
 * Create a new album
 * Creates a new album with the details provided in the request body.
 *
 * body CreateAlbumRequestDto The request body should contain the details of the album to be created.
 * no response value expected for this operation
 **/
exports.createNewAlbum = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get album by ID
 * Retrieves detailed information about an album specified by `id`.
 *
 * id Long The unique identifier of the album to be retrieved.
 * returns AlbumDto
 **/
exports.findAlbumById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coverUrl" : "coverUrl",
  "releaseDate" : "2000-01-23",
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
  "isSingle" : true,
  "id" : 0,
  "title" : "title",
  "tracks" : [ {
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
 * Get tracks of an album
 * Retrieves a list of tracks in the album specified by `id`.
 *
 * id Long The unique identifier of the album to retrieve tracks from.
 * returns List
 **/
exports.findAlbumTracks = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Link a new artist to an album
 * Links a new artist to a specified album. The album is identified by its `id`, and the artist details are provided in the request body.
 *
 * body AlbumArtistCRUDRequestDto The request body should contain the details of the artist to be linked to the album.
 * id Long The unique identifier of the album to which the new artist will be linked.
 * no response value expected for this operation
 **/
exports.linkNewArtist = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search for albums
 * Searches for albums based on the provided query and optional pagination parameters.
 *
 * q String The search query for finding albums.
 * page Integer The page number for pagination (optional). (optional)
 * returns PageAlbum
 **/
exports.searchAlbum = function(q,page) {
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
    "releaseDate" : "2000-01-23",
    "isSingle" : true,
    "id" : 5,
    "title" : "title"
  }, {
    "coverUrl" : "coverUrl",
    "releaseDate" : "2000-01-23",
    "isSingle" : true,
    "id" : 5,
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
 * Unlink an artist from an album
 * Removes the association between the artist specified by `artistId` and the album specified by `albumId`.
 *
 * albumId Long The unique identifier of the album from which the artist will be unlinked.
 * artistId Long The unique identifier of the artist to be unlinked from the album.
 * no response value expected for this operation
 **/
exports.unlinkArtist = function(albumId,artistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update linked artists for an album
 * Updates the list of artists linked to a specified album. The album is identified by its `id`, and the new list of artists is provided in the request body.
 *
 * body AlbumArtistCRUDRequestDto The request body should contain the new list of artists to be linked to the album.
 * id Long The unique identifier of the album whose linked artists are to be updated.
 * no response value expected for this operation
 **/
exports.updateLinkedArtist = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

