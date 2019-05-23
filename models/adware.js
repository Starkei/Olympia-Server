const mongoose = require("mongoose");
const AdwareSchema = new mongoose.Schema({
    productId: mongoose.SchemaTypes.ObjectId,
    productName: String,
    type: String,
    userId: mongoose.SchemaTypes.ObjectId,
    userEmail: String
});
const AdwareModel = mongoose.model("adware", AdwareSchema);

module.exports = AdwareModel;