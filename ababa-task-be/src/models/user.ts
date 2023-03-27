import mongoose from "mongoose";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

export const UserModel = mongoose.model<User>("User", UserSchema);
