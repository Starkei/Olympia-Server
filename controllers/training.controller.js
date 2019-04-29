const userModel = require("../models/trainings");
const CRUDController = require("./CRUD.controller");
const types = require("mongoose").Types;

class TrainingController extends CRUDController {
  constructor() {
    super(userModel);
  }

  getAllTraining(req, res) {
    super.getAll(req, res);
  }

  getTrainingById(req, res) {
    super.getById(req, res);
  }

  updateTraining(req, res) {
    super.update(req, res);
  }

  deleteTraining(req, res) {
    super.delete(req, res);
  }

  addTraining(req, res) {
    super.save(req, res);
  }
}

module.exports = TrainingController;
