const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  address: String,
  description: String,
  image: String,
  title: String,
  phoneNumbers: Array,
  time: Array,
  details: Array
});

const eventModel = mongoose.model("events", eventSchema);

module.exports = eventModel;
