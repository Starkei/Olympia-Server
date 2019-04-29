const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Training", () => {
  let postedObject = {};

  describe("POST /", () => {
    it("should add new training and return 200", done => {
      let user = {
        currency: "бел. руб.",
        description:
          "Метафорические карты – это удивительный, элегантный и удобный инструмент в исследовании своей жизни, позволяющий в короткий срок достигать сильных результатов: найти верное решение в сложных ситуациях и даже запустить процесс самоисцеления. Это помощь в намерении открыть дверь, которую еще не видишь, прикоснуться к глубоким чувствам.",
        image: "img",
        leader: "Анна Ефремова",
        moreInfo: "ул. Ленина 27-129, ТЦ Ленинград, 4 этаж",
        price: 15,
        title: "Метафорические карты. Практическое занятие с психологом"
      };

      chai
        .request(app)
        .post("/training")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject = res.body;
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all training record and return 200", done => {
      chai
        .request(app)
        .get("/training")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
    it("should get training by id and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .get(`/training/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get training by id and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .get(`/training/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () => {
    it("should update training and return 200", done => {
      let _id = postedObject._id;
      delete postedObject._id;

      chai
        .request(app)
        .get(`/training/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject._id = _id;
          done();
        });
    });
    it("should not update training and return 404", done => {
      let _id = "empty";

      chai
        .request(app)
        .get(`/training/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete training and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .delete(`/training/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should not delete training and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .delete(`/training/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
