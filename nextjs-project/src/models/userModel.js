import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Provide username"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Provide email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Provide password"],
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
