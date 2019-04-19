const productModel = require("../models/product");
const productService = require("../services/products.service");

class ProductsController {

    static getProducts(req, res) {
        productModel.find((err, data) => {
            if (err) console.error(err);
            res.send(data);
        });
    }

}

module.exports = ProductsController;