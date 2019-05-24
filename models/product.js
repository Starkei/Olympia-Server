const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    currency: String,
    description: String,
    firm: String,
    image: String,
    price: Number,
    title: String,
    type: Array,
    adware: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "adware"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    }
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;