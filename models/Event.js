const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  user_id : String,
  start: Date,
  end: Date,
  title: String,
});

module.exports = mongoose.model("Event", EventSchema);
