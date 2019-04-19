const productModel = require("../models/product");
const types = require("mongoose").Types;
class ProductsController {
    static getProducts(req, res) {
        productModel.find((err, data) => {
            ProductsController.sendData(res, err, data);
        });
    }

    static updateProduct(req, res) {
        let product = req.body;
        productModel.findOneAndUpdate({
            _id: product._id
        }, product, {
            useFindAndModify: false
        }, (err, data) => {
            ProductsController.sendData(res, err, data);
        });
    }

    static getProductById(req, res) {

        let _id = req.params._id;
        productModel.findOne({
            _id
        }, (err, data) => {
            ProductsController.sendData(res, err, data);
        });
    }

    static addProduct(req, res) {
        let product = new productModel(req.body);
        product._id = new types.ObjectId();
        product.save();
        res.status(200).send({
            message: "successful"
        });
    }

    static deleteProduct(req, res) {
        let _id = req.query._id;
        productModel.deleteOne({
            _id
        }, (err) => {
            if (err) res.send(err);
            else
                res.status(200).send({
                    message: "successful"
                });
        })
    }

    static sendData(res, err, data) {
        if (err) res.status(404).send(err);
        res.status(200).send(data);
    }

}

module.exports = ProductsController;