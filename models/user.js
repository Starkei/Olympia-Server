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
  userName: String,
  sports: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "sports"
  }],
  adware: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "adware"
  }],
  products: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "products"
  }]
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;