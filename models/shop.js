import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
  price: { type: Number, required: true },
  hours: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  phone: { type: String },
  address: { type: String, required: true }
});

export default mongoose.model('shops', shopSchema);