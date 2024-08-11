'use strict';

var utils = require('../utils/writer.js');
var LibraryController = require('../service/LibraryControllerService');

module.exports.checkIfUserFollow = function checkIfUserFollow (req, res, next, artist_id) {
  LibraryController.checkIfUserFollow(artist_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkIfUserSaved = function checkIfUserSaved (req, res, next, track_id) {
  LibraryController.checkIfUserSaved(track_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.followArtist = function followArtist (req, res, next, artist_id) {
  LibraryController.followArtist(artist_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFollowingArtistList = function getFollowingArtistList (req, res, next, page) {
  LibraryController.getFollowingArtistList(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSavedTrack = function getSavedTrack (req, res, next, page) {
  LibraryController.getSavedTrack(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.likeTrack = function likeTrack (req, res, next, track_id) {
  LibraryController.likeTrack(track_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unfollowArtist = function unfollowArtist (req, res, next, artist_id) {
  LibraryController.unfollowArtist(artist_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unlikeTrack = function unlikeTrack (req, res, next, track_id) {
  LibraryController.unlikeTrack(track_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
