const productModel = require("../models/product");

class ProductService {
    static async getProducts() {
        return await productModel.find();
    }

    static addProduct() {

    }
}

module.exports = ProductService;