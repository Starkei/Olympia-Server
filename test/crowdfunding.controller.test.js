const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Crowdfunding", () => {

    let postedObject = {};

    describe("POST /", () => {
        it("should add new crowdfunding and return 200", (done) => {
            let crowdfunding = {
                currency: "бел. руб.",
                description: "Park & ​​Diamond ™ - ультрапортативный, стильный и складной велосипедный шлем, который выглядит и ощущается как традиционная бейсболка.",
                image: "https://firebasestorage.googleapis.com/v0/b/olympia-be079.appspot.com/o/crowdfunding%2Fpark%26diamond.jpg?alt=media&token=c5f98129-7a39-44d2-bad8-3d25ebe53dbf",
                price: 190,
                title: "Park & ​​Diamond: складной велосипедный шлем",
                type: ["Головные уборы"],
                usage: ["Безопасность"]
            };

            chai
                .request(app)
                .post("/crowdfunding")
                .send(crowdfunding)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    postedObject = res.body;
                    done();
                });
        });
    });
    describe("GET /", () => {
        it("should get all crowdfunding record and return 200", (done) => {
            chai
                .request(app)
                .get("/crowdfunding")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
        it("should get crowdfunding by id and return 200", (done) => {
            let _id = postedObject._id;
            chai
                .request(app)
                .get(`/crowdfunding/${_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("should not get crowdfunding by id and return 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .get(`/crowdfunding/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe("PUT /", () => {
        it("should update crowdfunding and return 200", (done) => {
            let _id = postedObject._id;
            delete postedObject._id;

            chai
                .request(app)
                .get(`/crowdfunding/${_id}`)
                .send(postedObject)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    postedObject._id = _id;
                    done();
                });
        });
        it("should not update crowdfunding and return 404", (done) => {
            let _id = "empty";

            chai
                .request(app)
                .get(`/crowdfunding/${_id}`)
                .send(postedObject)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
    describe("DELETE /", () => {
        it("should delete crowdfunding and return 200", (done) => {
            let _id = postedObject._id;
            chai
                .request(app)
                .delete(`/crowdfunding/${_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should not delete crowdfunding and return 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .delete(`/crowdfunding/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});