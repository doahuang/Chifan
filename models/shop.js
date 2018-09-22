import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  photo: { type: String },
  hours: { type: String },
  phone: { type: String },
  address: { type: String }
});

export default mongoose.model('shops', shopSchema);