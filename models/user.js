const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  about: String,
  chatId: Array,
  contacts: Array,
  dateBirth: Date,
  displayName: String,
  email: String,
  phone: Number,
  photoURL: String,
  role: String,
  sex: String,
  UserName: String,
  adware: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "adware"
  }]
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;