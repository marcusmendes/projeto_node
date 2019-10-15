import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    required: true,
  },
}, {
  timestamps: true,
});

User.index({
  email: 1,
});

export default mongoose.model('User', User);
