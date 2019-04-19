const assert = require("assert");
const productService = require("../services/products.service");

describe("Product Service", () => {


    describe("getProducts", () => {

        it("should return object", () => {
            let data = productService.getProducts();
            let typeOfData = typeof data;
            assert.strictEqual(typeOfData, "object", "data is not an object");
        });

    });

});