const productModel = require("../models/product");
const productTypeModel = require("..//models/productTypes");
const CRUDController = require("./CRUD.controller");

class ProductsController extends CRUDController {
  constructor() {
    super(productModel);
  }

  updateProduct(req, res) {
    let _id = req.params._id;
    let productData = req.body;
    if (!productData) res.status(400).send(productData);
    this.model.findOneAndUpdate({
        _id
      },
      productData,
      (err, data) => {
        if (err) res.status(404).send(err);
        res.status(200).send(data);
      }
    );
  }

  /**
   *
   * Save product to database
   * @param {*} req
   * @param {*} res - res.body should be filled
   * @memberof ProductsController
   */
  addProduct(req, res) {
    //send status bad request and err message if req.body is empty
    if (!req.body)
      res.status(400).send({
        message: "req.body should be not empty"
      });

    if (!req.body.user)
      res.status(400).send({
        message: "req.body.userId should be not empty"
      });

    let data = req.body;

    //TODO: Validate data

    let product = new this.model(req.body);
    product.save(err => {
      if (err) res.status(400).send(err);
      else res.sendStatus(200);
    });
  }

  deleteProduct(req, res) {
    return super.delete(req, res);
  }

  getAllProductTypes(req, res) {
    productTypeModel.find((err, data) => {
      if (err) res.status(400).send(err);
      else {
        res.send(data);
      }
    });
  }
}

module.exports = ProductsController;