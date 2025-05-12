import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type:Boolean,
    default: false
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
