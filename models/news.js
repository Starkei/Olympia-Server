const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  description: String,
  image: String,
  title: String,
  type: String
});

const newsModel = mongoose.model("news", newsSchema);
module.exports = newsModel;
