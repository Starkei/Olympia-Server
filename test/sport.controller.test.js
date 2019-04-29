const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("SportController", () => {

    let postedSportId = "";
    let postedSportData = {};

    describe("POST /", () => {
        it("should create sport in database and return posted data with status code 200", (done) => {
            let sportData = {
                price: 203,
                address: "ул. Гикало 9",
                area: "ХЗ",
                currency: "бел.руб",
                description: "Бла бла бла вступайте в наш клуб",
                image: "http://storage/lohimage",
                reference: "http://youCanBeBetter.com",
                title: "You can be better",
                underground: "Якуба Колоса",
                timeWork: {
                    from: 64800,
                    to: 75600
                },
                age: {
                    from: 6,
                    to: 16
                },
                group: {
                    from: 10,
                    to: 20
                },
                sex: ["Мужской", "Женский"],
                type: ["Айкидо"],
                contraindication: ["Сердечные заболевания"],
                phoneNumbers: ["+375291231233"],
            }

            chai
                .request(app)
                .post("/sports")
                .send(sportData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    postedSportData = res.body;
                    postedSportId = res.body._id;
                    delete postedSportData._id;
                    done();
                });
        });
    });
    describe("GET /", () => {
        it("should return all sport in database and return status code 200", (done) => {
            chai
                .request(app)
                .get("/sports")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
        it("should return sport by id and return status code 200", (done) => {
            chai
                .request(app)
                .get(`/sports/${postedSportId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("should not return sport by wrong id and return status code 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .get(`/sports/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe("PUT /", () => {
        it("should update sport by id and return updated data with status code 200", (done) => {
            postedSportData.address = "ул. Платонова 39";
            chai
                .request(app)
                .put(`/sports/${postedSportId}`)
                .send(postedSportData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("should not update sport by wrong id and return status code 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .put(`/sports/${_id}`)
                .send(postedSportData)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe("DELETE /", () => {
        it("should delete sport by id and return status code 200", (done) => {
            chai
                .request(app)
                .delete(`/sports/${postedSportId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should not delete sport by wrong id and return status code 404", (done) => {
            let _id = "empty";
            chai
                .request(app)
                .delete(`/sports/${_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        });
    });
});