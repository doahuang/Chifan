import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    refs: 'users',
    required: true
  },
  shop: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

export default mongoose.model('likes', likeSchema);