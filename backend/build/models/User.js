"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  username: String,
  password: String,
  email: String,
  createAt: String
});

var _default = (0, _mongoose.model)('User', userSchema);

exports.default = _default;