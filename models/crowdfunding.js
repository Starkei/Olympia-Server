const mongoose = require("mongoose");

const crowdfundingSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    currency: String,
    description: String,
    image: String,
    price: Number,
    title: String,
    type: Array,
    usage: Array

});

const crowdfundingModel = mongoose.model("crowdfunding", crowdfundingSchema);

module.exports = crowdfundingModel;