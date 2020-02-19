import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at:{
    type: Date,
    default: Date.now()
  }
});

const Post = mongoose.model('Post', PostSchema);

export default Post
