import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    refs: 'users'
  },
  rating: { type: Number, required: true },
  text: { type: String },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('reviews', reviewSchema);