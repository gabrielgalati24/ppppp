import Post from '../../models/Post'
import checkAuth from '../../util/check-auth'
const { AuthenticationError } = require('apollo-server');
const query = {
    Query:{
        async getPost(_,{postId}){
            console.log(postId)
            console.log("prueba")
                      try{
                        const post = await Post.findById(postId)
                        if(post)  return post 
                       
                      }catch(err){
                         throw new Error(err)
                      }
                 },
        async getPosts(){
    console.log("post")
              try{
                  const posts = await Post.find()
                  return posts 
              }catch(err){
                 throw new Error(err)
              }
         }
     },
 
     Mutation:{
async createPost(_,{body},context){
    console.log("create post")
        const user = checkAuth(context)
      
        const newPost = new Post({
            body,
            user:user.id,
            username :user.username,
            createAt: new Date().toISOString()
        })
        const post = await newPost.save();

        return post
},
async prueba(_,{username}){
    console.log(username)
    var x = "sdsd"
    return x

},
async deletePost(_, { postId }, context) {
    console.log("delete post")
    const user = checkAuth(context);

    try {
      const post = await Post.findById(postId);
      if (user.username === post.username) {
        await post.delete();
        return 'Post deleted successfully';
      } else {
        throw new AuthenticationError('Action not allowed');
      }
    } catch (err) {
      throw new Error(err);
    }
  },
  async likePost(_, { postId }, context) {
    const { username } = checkAuth(context);

    const post = await Post.findById(postId);
    if (post) {
      if (post.likes.find((like) => like.username === username)) {
        // Post already likes, unlike it
        post.likes = post.likes.filter((like) => like.username !== username);
      } else {
        // Not liked, like post
        post.likes.push({
          username,
          createdAt: new Date().toISOString()
        });
      }

      await post.save();
      return post;
    } else throw new UserInputError('Post not found');
  },
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    }
  
},

},

  
     
}
export default query;