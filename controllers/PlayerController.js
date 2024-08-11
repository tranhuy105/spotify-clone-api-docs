'use strict';

var utils = require('../utils/writer.js');
var PlayerController = require('../service/PlayerControllerService');

module.exports.addItemToQueue = function addItemToQueue (req, res, next, trackId) {
  PlayerController.addItemToQueue(trackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStreamingHistory = function getStreamingHistory (req, res, next) {
  PlayerController.getStreamingHistory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStreamingSession = function getStreamingSession (req, res, next) {
  PlayerController.getStreamingSession()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.next = function next (req, res, next) {
  PlayerController.next()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pauseSession = function pauseSession (req, res, next) {
  PlayerController.pauseSession()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playTrack = function playTrack (req, res, next, trackId, source_id, source_type, mode) {
  PlayerController.playTrack(trackId, source_id, source_type, mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.previous = function previous (req, res, next) {
  PlayerController.previous()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resumeSession = function resumeSession (req, res, next) {
  PlayerController.resumeSession()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setRepeatMode = function setRepeatMode (req, res, next) {
  PlayerController.setRepeatMode()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setSequenceMode = function setSequenceMode (req, res, next) {
  PlayerController.setSequenceMode()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setShuffleMode = function setShuffleMode (req, res, next) {
  PlayerController.setShuffleMode()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
