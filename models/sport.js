const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    price: Number,
    address: String,
    area: String,
    currency: String,
    description: String,
    image: String,
    reference: String,
    title: String,
    underground: String,
    timeWork: Map,
    group: Map,
    age: Map,
    sex: Array,
    type: Array,
    contraindication: Array,
    phoneNumbers: Array,
});

const sportModel = mongoose.model("sports", sportSchema);

module.exports = sportModel;