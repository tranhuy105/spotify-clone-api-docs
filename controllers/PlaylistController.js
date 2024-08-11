'use strict';

var utils = require('../utils/writer.js');
var PlaylistController = require('../service/PlaylistControllerService');

module.exports.addTrackToEnd = function addTrackToEnd (req, res, next, playlistId, track_id) {
  PlaylistController.addTrackToEnd(playlistId, track_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createPlaylist = function createPlaylist (req, res, next, body) {
  PlaylistController.createPlaylist(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTrack = function deleteTrack (req, res, next, playlistId, trackId) {
  PlaylistController.deleteTrack(playlistId, trackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllPlaylistTracks = function findAllPlaylistTracks (req, res, next, id, page) {
  PlaylistController.findAllPlaylistTracks(id, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPlaylistById = function findPlaylistById (req, res, next, id) {
  PlaylistController.findPlaylistById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.moveTrack = function moveTrack (req, res, next, playlistId, trackId, new_position) {
  PlaylistController.moveTrack(playlistId, trackId, new_position)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchPlaylist = function searchPlaylist (req, res, next, q, page) {
  PlaylistController.searchPlaylist(q, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlaylist = function updatePlaylist (req, res, next, body, id) {
  PlaylistController.updatePlaylist(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
