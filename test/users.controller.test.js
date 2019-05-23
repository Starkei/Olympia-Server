const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Users", () => {
  let postedObject = {};

  describe("POST /", () => {
    it("should add new user and return 200", done => {
      let user = {
        about: "Хороший мальчик",
        chatId: "VRZNq8iKqZWDWO1En90z",
        contacts: ["hk2UAHAlfAZFk6Dy1NGAq5NJQmc2"],
        dateBirth: "December 17, 1995 03:24:00",
        displayName: "Alex",
        email: "test@mail.ru",
        phone: 1317500,
        photoURL: "img",
        role: "Admin",
        sex: "Man",
        UserName: "Alex"
      };

      chai
        .request(app)
        .post("/user")
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
    it("should get all user record and return 200", done => {
      chai
        .request(app)
        .get("/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
    it("should get user by id and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .get(`/user/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get user by id and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .get(`/user/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () => {
    it("should update user and return 200", done => {
      let _id = postedObject._id;
      delete postedObject._id;

      chai
        .request(app)
        .get(`/user/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject._id = _id;
          done();
        });
    });
    it("should not update user and return 404", done => {
      let _id = "empty";

      chai
        .request(app)
        .get(`/user/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete user and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .delete(`/user/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should not delete user and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .delete(`/user/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
