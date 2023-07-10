const { Schema, model } = require("mongoose");

const professionelSchema = new Schema({
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
  domaine: {
    type: String,
    required: true,
    trim: true,
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

  rate: {
    type: Number,
    Default: 0,
  },

  role: {
    type: String,
    default: "P",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  file: {
    type: String,
    default: "https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Professionel = model("Professionel", professionelSchema);

module.exports = Professionel;
