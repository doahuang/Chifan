import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, maxlength: 20 },
  email: { type: String, required: true, maxlength: 20 },
  password: { type: String, required: true, maxlength: 60 },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('users', userSchema);