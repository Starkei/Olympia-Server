const mongoose = require("mongoose");
const ProductTypesSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    }],
    title: String
});

const ProductTypesModel = mongoose.model("productTypes", ProductTypesSchema);

module.exports = ProductTypesModel;