const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Products", () => {
    describe("GET /", () => {
        it("should get all students record", done => {
            chai
                .request(app)
                .get("/products")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });

        //IMPORTANT: passed id should be exists
        it("should get product by id", done => {
            let _id = "5cb5df405e8abe24a4733731";
            chai
                .request(app)
                .get(`/product/${_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });

        it("should not get product by id and return 404", done => {
            let _id = "haha";
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
        //IMPORTANT: passed id should be exists
        it("should update product by id", done => {
            let product = {
                _id: "5cb5ede0e9c7442284d80c24",
                type: ["Одежда"],
                currency: "бел.руб",
                description: "Шорты женские Smmash – лучший вариант для стильных девушек, подойдут для занятий фитнесом, кросс-фитом и просто для занятий в зале.",
                firm: "Sash",
                image: "http://bigsport.by/userfiles/shop/large_shop/21206_shorty-smmash-zhenskie-23021.jpeg",
                price: 123,
                title: "Шорты Smash (Женские) 23021",
            };
            chai
                .request(app)
                .put(/product/)
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })

    describe("POST /", () => {
        //IMPORTANT: passed id should be exists
        it("should add product", done => {
            let product = {
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
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message");
                    res.body.message.should.equal("successful");
                    done();
                });
        });
    })

    describe("DELETE /", () => {
        //IMPORTANT: passed id should be exists
        it("should delete product by id", done => {
            let _id = "5cb5ede0e9c7442284d80c24";
            chai
                .request(app)
                .delete(`/product/${_id}`)
                .end((err, res) => {
                    res.body.should.have.property("message");
                    res.body.message.should.equal("successful");
                    done();
                });
        });
    })
});