'use strict';

var utils = require('../utils/writer.js');
var TrackController = require('../service/TrackControllerService');

module.exports.getAllTrack = function getAllTrack (req, res, next, q, page) {
  TrackController.getAllTrack(q, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTrackById = function getTrackById (req, res, next, id) {
  TrackController.getTrackById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadTrack = function uploadTrack (req, res, next, body, album_id, title) {
  TrackController.uploadTrack(body, album_id, title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
