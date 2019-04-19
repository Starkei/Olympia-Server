const router = require("express").Router();
const productController = require("../controllers/products.controller");

router.get("/products", productController.getProducts);
router.get("/product/:_id", productController.getProductById);
router.put("/product", productController.updateProduct);
router.post("/product", productController.addProduct);
router.delete("/product/:_id", productController.deleteProduct);


module.exports = router;