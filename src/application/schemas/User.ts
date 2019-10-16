import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
  name?: string,
  email: string,
  password: string,
  role: string
}

const User = new Schema({
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

export default model<UserInterface>('User', User);
