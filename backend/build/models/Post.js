"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var postSchema = new _mongoose.Schema({
  username: String,
  body: String,
  imgUrl: String,
  createAt: String,
  comments: [{
    body: String,
    username: String,
    createAt: String
  }],
  likes: [{
    username: String,
    createAt: String
  }],
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
});

var _default = (0, _mongoose.model)('Post', postSchema);

exports.default = _default;