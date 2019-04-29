const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("News", () => {
  let postedObject = {};

  describe("POST /", () => {
    it("should add new news and return 200", done => {
      let news = {
        description:
          "Волейболистки «Минчанки» потерпели 15-е поражение со старта суперлиги открытого чемпионата России.",
        image: "img",
        title:
          "Волейболистки «Минчанки» потерпели 15-е поражение в российской суперлиге",
        type: "Спорт"
      };

      chai
        .request(app)
        .post("/news")
        .send(news)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject = res.body;
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all news record and return 200", done => {
      chai
        .request(app)
        .get("/news")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
    it("should get news by id and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .get(`/news/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get news by id and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .get(`/news/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () => {
    it("should update news and return 200", done => {
      let _id = postedObject._id;
      delete postedObject._id;

      chai
        .request(app)
        .get(`/news/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject._id = _id;
          done();
        });
    });
    it("should not update news and return 404", done => {
      let _id = "empty";

      chai
        .request(app)
        .get(`/news/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete news and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .delete(`/news/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should not delete news and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .delete(`/news/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
