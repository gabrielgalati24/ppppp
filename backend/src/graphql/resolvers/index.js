import postResolvers from './post'
import usersResolvers from './users'
import commentsResolvers from './comments'

const query ={
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
      },
      Query: {
        ...postResolvers
      },
      Mutation: {
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation
      },
      Subscription: {
        ...postResolvers.Subscription
      }
}

export default query;