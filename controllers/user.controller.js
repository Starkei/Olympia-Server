const userModel = require("../models/user");
const CRUDController = require("./CRUD.controller");
const types = require("mongoose").Types;

class UserController extends CRUDController {
  constructor() {
    super(userModel);
  }

  getAllUser(req, res) {
    super.getAll(req, res);
  }

  getUserById(req, res) {
    super.getById(req, res);
  }

  updateUser(req, res) {
    super.update(req, res);
  }

  deleteUser(req, res) {
    super.delete(req, res);
  }

  addUser(req, res) {
    super.save(req, res);
  }
}

module.exports = UserController;
