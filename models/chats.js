const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  message: Array,
  recipientId: String,
  senderId: String,
  title: String
});

const chatModel = mongoose.model("chats", chatSchema);
module.exports = chatModel;
