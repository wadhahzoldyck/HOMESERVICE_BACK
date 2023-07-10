const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your lastName"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your Phone Number"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    unique: true,
  },
  ville: {
    type: String,
    required: true,
  },

  adresse: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    min: 6,
  },
  role: {
    type: String,
    default: "C",
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dyvtexpjm/image/upload/v1655034064/download_ku1m9q.png",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

module.exports = User;
