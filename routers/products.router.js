const router = require("express").Router();
const ProductController = require("../controllers/products.controller");
const productController = new ProductController();

router.get("/products", productController.getProducts.bind(productController));
router.get("/product/:_id", productController.getProductById.bind(productController));
router.put("/product/:_id", productController.updateProduct.bind(productController));
router.delete("/product/:_id", productController.deleteProduct.bind(productController));
router.post("/product", productController.addProduct.bind(productController));

module.exports = router;