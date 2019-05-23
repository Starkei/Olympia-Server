const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

chai.use(chaiHttp);
chai.should();

describe("Products controller request methods test", () => {

    postedProduct = {
        _id: "",
        data: {}
    };

    require("./methods/products-post-method.controller.test")(chai, app, postedProduct);
    //require("./methods/products-get-method.controller.test")(chai, app, postedProduct);
    //require("./methods/products-put-method.controller.test")(chai, app, postedProduct);
    require("./methods/products-delete-method.controller.test")(chai, app, postedProduct);

});