import {ApolloServer} from 'apollo-server'

import mongoose from "mongoose";
import config from "./config";

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) =>({req})
});


mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
      console.log("databse connect")
      return server.listen({port:5000})
  .then((res)=>{
      console.log(`server start on port ${res.url}`)
  })})
  .catch((err) => console.log(err));




