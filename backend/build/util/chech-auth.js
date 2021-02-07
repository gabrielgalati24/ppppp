"use strict";

var {
  AuthenticationError
} = require('apollo-server');

var jwt = require('jsonwebtoken');

var {
  SECRET_KEY
} = require('../config');

module.exports = context => {
  // context = { ... headers }
  var authHeader = context.req.headers.authorization;

  if (authHeader) {
    // Bearer ....
    var token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        var user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }

    throw new Error("Authentication token must be 'Bearer [token]");
  }

  throw new Error('Authorization header must be provided');
};