const chatModel = require("../models/chats");
const CRUDController = require("./CRUD.controller");

class ChatController extends CRUDController {
  constructor() {
    super(chatModel);
  }

  getAllChat(req, res) {
    super.getAll(req, res);
  }

  getChatById(req, res) {
    super.getById(req, res);
  }

  updateChat(req, res) {
    super.update(req, res);
  }

  deleteChat(req, res) {
    super.delete(req, res);
  }

  addChat(req, res) {
    super.save(req, res);
  }
}

module.exports = ChatController;
