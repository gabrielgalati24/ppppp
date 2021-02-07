"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../../models/Post"));

var _chechAuth = _interopRequireDefault(require("../../util/chech-auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var {
  AuthenticationError
} = require('apollo-server');

var query = {
  Query: {
    getPost(_, _ref) {
      return _asyncToGenerator(function* () {
        var {
          postId
        } = _ref;
        console.log(postId);
        console.log("prueba");

        try {
          var post = yield _Post.default.findById(postId);
          if (post) return post;
        } catch (err) {
          throw new Error(err);
        }
      })();
    },

    getPosts() {
      return _asyncToGenerator(function* () {
        console.log("post");

        try {
          var posts = yield _Post.default.find();
          return posts;
        } catch (err) {
          throw new Error(err);
        }
      })();
    }

  },
  //  async getPost(_,{postId}){
  //     console.log("posts")
  //      console.log(postId)
  //      try{
  //          const post = await Post.findById(postId)
  //          console.log(post)
  //          if(post){
  //              return post
  //          }else{
  //               throw new Error("no found")
  //          }
  //      } catch{
  //          throw new Error("error")
  //      }
  //  },
  Mutation: {
    createPost(_, _ref2, context) {
      return _asyncToGenerator(function* () {
        var {
          body
        } = _ref2;
        var user = (0, _chechAuth.default)(context);
        var newPost = new _Post.default({
          body,
          user: user.id,
          username: user.username,
          createAt: new Date().toISOString()
        });
        var post = yield newPost.save();
        return post;
      })();
    }

  },

  deletePost(_, _ref3, context) {
    return _asyncToGenerator(function* () {
      var {
        postId
      } = _ref3;
      var user = (0, _chechAuth.default)(context);
      console.log(user);

      try {
        var post = yield _Post.default.findById(postId);
        console.log(post.username);

        if (user.username === post.username) {
          yield post.delete();
          return "post delete";
        } else {
          throw new AuthenticationError('Invalid/Expired token');
        }
      } catch (err) {}
    })();
  }

};
var _default = query;
exports.default = _default;