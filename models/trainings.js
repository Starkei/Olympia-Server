const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  currency: String,
  description: String,
  image: String,
  leader: String,
  moreInfo: String,
  price: Number,
  title: String
});

const trainingModel = mongoose.model("trainings", trainingSchema);
module.exports = trainingModel;
