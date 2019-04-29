const eventModel = require("../models/event");
const CRUDController = require("./CRUD.controller");

class EventController extends CRUDController {
  constructor() {
    super(eventModel);
  }

  addEvent(req, res) {
    return super.save(req, res);
  }

  getAllEvents(req, res) {
    return super.getAll(req, res);
  }

  getEventById(req, res) {
    return super.getById(req, res);
  }

  updateEvent(req, res) {
    return super.update(req, res);
  }

  deleteEvent(req, res) {
    return super.delete(req, res);
  }
}

module.exports = EventController;
