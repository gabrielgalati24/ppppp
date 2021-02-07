"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var {
  gql
} = require('apollo-server');

var query = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Post {\n    id: ID!\n    body: String!\n    createdAt: String!\n    username: String!\n    comments: [Comment]!\n    likes: [Like]!\n    likeCount: Int!\n    commentCount: Int!\n  }\n  type Comment {\n    id: ID!\n    createdAt: String!\n    username: String!\n    body: String!\n  }\n  type Like {\n    id: ID!\n    createdAt: String!\n    username: String!\n  }\n  type User {\n    id: ID!\n    email: String!\n    token: String!\n    username: String!\n    createdAt: String!\n  }\n  input RegisterInput {\n    username: String!\n    password: String!\n    confirmPassword: String!\n    email: String!\n  }\n  type Query {\n    getPost(postId: ID!): Post\n    getPosts: [Post]\n\n\n  }\n  type Mutation {\n    register(registerInput: RegisterInput): User!\n    login(username: String!, password: String!): User!\n    createPost(body: String!): Post!\n    deletePost(postId: ID!): String!\n    createComment(postId: String!, body: String!): Post!\n    deleteComment(postId: ID!, commentId: ID!): Post!\n    likePost(postId: ID!): Post!\n  }\n  type Subscription {\n    newPost: Post!\n  }\n"])));
var _default = query;
exports.default = _default;