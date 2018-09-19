import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    refs: 'users',
    required: true
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, maxlength: 250 },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('reviews', reviewSchema);