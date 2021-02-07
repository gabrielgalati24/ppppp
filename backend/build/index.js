"use strict";

var _apolloServer = require("apollo-server");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

var _typeDefs = _interopRequireDefault(require("./graphql/typeDefs"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _apolloServer.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default,
  context: (_ref) => {
    var {
      req
    } = _ref;
    return {
      req
    };
  }
});

_mongoose.default.connect(_config.default.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(db => {
  console.log("databse connect");
  return server.listen({
    port: 5000
  }).then(res => {
    console.log("server start on port ".concat(res.url));
  });
}).catch(err => console.log(err));