import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: String,

  googleId: String,

  isVerified: {
    type: Boolean,
    default: false,
  },

  verificationCode: String,

  verificationCodeExpires: Date,

  resetPasswordCode: String,
  resetPasswordExpires: Date,

});

export default mongoose.model("User", userSchema);