const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Chats", () => {
  let postedObject = {};

  describe("POST /", () => {
    it("should add new chat and return 200", done => {
      let chat = {
        message: ["HelloWorld!"],
        recipientId: "2IPdTPNGo4XPtlTnSTQTni8Hsjn1",
        senderId: "hk2UAHAlfAZFk6Dy1NGAq5NJQmc2",
        title: "Влад"
      };

      chai
        .request(app)
        .post("/chat")
        .send(chat)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject = res.body;
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all chat record and return 200", done => {
      chai
        .request(app)
        .get("/chat")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
    it("should get chat by id and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .get(`/chat/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get chat by id and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .get(`/chat/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () => {
    it("should update chat and return 200", done => {
      let _id = postedObject._id;
      delete postedObject._id;

      chai
        .request(app)
        .get(`/chat/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject._id = _id;
          done();
        });
    });
    it("should not update chat and return 404", done => {
      let _id = "empty";

      chai
        .request(app)
        .get(`/chat/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete chat and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .delete(`/chat/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should not delete chat and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .delete(`/chat/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
