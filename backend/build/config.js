"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET_KEY = exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/furrysocialmedia",
  PORT: process.env.PORT || 5000
};
exports.default = _default;
var SECRET_KEY = "furry";
exports.SECRET_KEY = SECRET_KEY;