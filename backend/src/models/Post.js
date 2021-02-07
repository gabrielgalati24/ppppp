import {model,Schema} from "mongoose"

const postSchema = new Schema({
    username: String,
    body: String,
    imgUrl: String,
    createAt: String,
    comments:[
        {
body:String,
username:String,
createAt: String,
        }
    ],
    likes:[
      {
        username:String,
        createAt: String,
      }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})
export default model('Post',postSchema)