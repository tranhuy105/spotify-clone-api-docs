'use strict';

var utils = require('../utils/writer.js');
var AlbumController = require('../service/AlbumControllerService');

module.exports.createNewAlbum = function createNewAlbum (req, res, next, body) {
  AlbumController.createNewAlbum(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAlbumById = function findAlbumById (req, res, next, id) {
  AlbumController.findAlbumById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAlbumTracks = function findAlbumTracks (req, res, next, id) {
  AlbumController.findAlbumTracks(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.linkNewArtist = function linkNewArtist (req, res, next, body, id) {
  AlbumController.linkNewArtist(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchAlbum = function searchAlbum (req, res, next, q, page) {
  AlbumController.searchAlbum(q, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unlinkArtist = function unlinkArtist (req, res, next, albumId, artistId) {
  AlbumController.unlinkArtist(albumId, artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLinkedArtist = function updateLinkedArtist (req, res, next, body, id) {
  AlbumController.updateLinkedArtist(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
