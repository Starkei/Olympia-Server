const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Event", () => {
  let postedObject = {};

  describe("POST /", () => {
    it("should add new event and return 200", done => {
      let event = {
        address: "ул. Гикало 9",
        description: "Мужские пробежки под луной.Только для программистов.",
        image: "http://storage/lohimage",
        title: "Мужские пробежки под луной.",
        phoneNumbers: ["+375442281488", "+375291488228"],
        time: ["20 апреля, суббота 09:00", "21 апреля, воскресенье 09:00"],
        details: ["20 апреля, суббота 09:00", "21 апреля, воскресенье 09:00"]
      };

      chai
        .request(app)
        .post("/events")
        .send(event)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject = res.body;
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all event record and return 200", done => {
      chai
        .request(app)
        .get("/events")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
    it("should get event by id and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .get(`/events/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get event by id and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .get(`/events/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () => {
    it("should update event and return 200", done => {
      let _id = postedObject._id;
      delete postedObject._id;

      chai
        .request(app)
        .get(`/events/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          postedObject._id = _id;
          done();
        });
    });
    it("should not update event and return 404", done => {
      let _id = "empty";

      chai
        .request(app)
        .get(`/events/${_id}`)
        .send(postedObject)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete event and return 200", done => {
      let _id = postedObject._id;
      chai
        .request(app)
        .delete(`/events/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should not delete event and return 404", done => {
      let _id = "empty";
      chai
        .request(app)
        .delete(`/events/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
