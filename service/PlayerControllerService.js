'use strict';


/**
 * Add a track to the player queue
 * Adds a specified track to the playback queue. The track is identified by `trackId` provided as a path parameter.
 *
 * trackId Long The unique identifier of the track to be added to the player queue.
 * no response value expected for this operation
 **/
exports.addItemToQueue = function(trackId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get recent streaming history
 * Retrieves a list of recently played tracks by the user.
 *
 * returns List
 **/
exports.getStreamingHistory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "listeningTime" : 0,
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
  },
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "listeningTime" : 0,
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
  },
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current streaming session
 * Retrieves the details of the current streaming session, including the currently playing track and playback status.
 *
 * returns StreamingSession
 **/
exports.getStreamingSession = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adInterval" : 7,
  "currentMedia" : { },
  "itemQueue" : [ {
    "itemType" : "TRACK",
    "id" : 3
  }, {
    "itemType" : "TRACK",
    "id" : 3
  } ],
  "lastRecordedTime" : 1,
  "historyIndex" : 5,
  "adCounter" : 9,
  "streamingSource" : {
    "sourceId" : 6,
    "sourceType" : "PLAYLIST"
  },
  "lastPlayedAdTime" : 2,
  "userId" : 0,
  "deviceId" : "deviceId",
  "accumulatedTime" : 5,
  "playbackMode" : "SEQUENTIAL",
  "playing" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Skip to the next track
 * Skips to the next track in the playback queue.
 *
 * returns String
 **/
exports.next = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "http://example.com/aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Pause playback
 * Pauses the playback of the currently playing track or playlist.
 *
 * no response value expected for this operation
 **/
exports.pauseSession = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Play a specific track
 * Starts playing the track specified by `trackId`. Additional parameters can specify the source of the track and playback mode.
 *
 * trackId Long The unique identifier of the track to be played.
 * source_id Long The ID of the source from which the track is being played (e.g., playlist or album).
 * source_type String The type of the source from which the track is being played. Possible values are `playlist`, `album`, `track`, `liked`.
 * mode String The playback mode. Possible values are `shuffle`, `repeat`, `sequential`. This parameter is optional. (optional)
 * returns String
 **/
exports.playTrack = function(trackId,source_id,source_type,mode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Skip to the previous track
 * Skips to the previous track in the playback queue.
 *
 * returns String
 **/
exports.previous = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "http://example.com/aeiou";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Resume playback
 * Resumes playback of the currently playing track or playlist.
 *
 * no response value expected for this operation
 **/
exports.resumeSession = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set repeat mode
 * Sets the repeat mode for the player. The response confirms the current repeat mode setting.
 *
 * returns String
 **/
exports.setRepeatMode = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set sequential mode
 * Enables or disables sequential play mode for the player. The response confirms the current sequential play mode setting.
 *
 * returns String
 **/
exports.setSequenceMode = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set shuffle mode
 * Enables or disables shuffle mode for the player. The response confirms the current shuffle mode setting.
 *
 * returns String
 **/
exports.setShuffleMode = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

