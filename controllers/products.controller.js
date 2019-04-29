const productModel = require("../models/product");
const CRUDController = require("./CRUD.controller");
class ProductsController extends CRUDController {

    constructor() {
        super(productModel);
    }

    getProducts(req, res) {
        return super.getAll(req, res);
    }

    updateProduct(req, res) {
        return super.update(req, res);
    }

    getProductById(req, res) {
        return super.getById(req, res);
    }

    addProduct(req, res) {
        return super.save(req, res);
    }

    deleteProduct(req, res) {
        return super.delete(req, res);
    }
}

module.exports = ProductsController;