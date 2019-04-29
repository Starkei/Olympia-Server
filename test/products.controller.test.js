const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Products", () => {
    let postedProductId = "";
    let postedProductData = {};

    describe("POST /", () => {
        it("should add product", done => {
            let productData = {
                type: ["Одежда"],
                currency: "бел.руб",
                description: "Шорты женские Smmash – лучший вариант для стильных девушек, подойдут для занятий фитнесом, кросс-фитом и просто для занятий в зале.",
                firm: "Smash",
                image: "http://bigsport.by/userfiles/shop/large_shop/21206_shorty-smmash-zhenskie-23021.jpeg",
                price: 123,
                title: "Шорты Smash (Женские) 23021",
            };
            chai
                .request(app)
                .post("/product")
                .send(productData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    postedProductData = res.body;
                    postedProductId = res.body._id;
                    delete postedProductData._id;
                    done();
                });
        });
    });

    describe("GET /", () => {
        it("should get all products record", done => {
            chai
                .request(app)
                .get("/products")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
    });

        it("should get product by id", done => {
            chai
                .request(app)
                .get(`/product/${postedProductId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });

        it("should not get product by id and return 404", done => {
            let _id = "empty";
            chai
                .request(app)
                .get(`/product/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe("PUT /", () => {
        it("should update product by id", done => {
            postedProductData.firm = "Sash";
            chai
                .request(app)
                .put(`/product/${postedProductId}`)
                .send(postedProductData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("should not update product by id and return 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .get(`/product/${_id}`)
                .send(postedProductData)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
  });


    describe("DELETE /", () => {
        it("should delete product by id", done => {
            chai
                .request(app)
                .delete(`/product/${postedProductId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should not delete product by id and return 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .delete(`/product/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
  });
});
