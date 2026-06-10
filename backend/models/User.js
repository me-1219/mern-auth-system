import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String }, // optional for Google users
    googleId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);