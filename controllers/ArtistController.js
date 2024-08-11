'use strict';

var utils = require('../utils/writer.js');
var ArtistController = require('../service/ArtistControllerService');

module.exports.createArtistProfile = function createArtistProfile (req, res, next, body) {
  ArtistController.createArtistProfile(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllArtist = function findAllArtist (req, res, next, q, page) {
  ArtistController.findAllArtist(q, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findArtistById = function findArtistById (req, res, next, id) {
  ArtistController.findArtistById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
