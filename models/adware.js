const mongoose = require("mongoose");
const AdwareSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    },
    type: String,
});
const AdwareModel = mongoose.model("adware", AdwareSchema);

module.exports = AdwareModel;