const newsModel = require("../models/news");
const CRUDController = require("./CRUD.controller");
const types = require("mongoose").Types;

class NewsController extends CRUDController {
  constructor() {
    super(newsModel);
  }

  getAllNews(req, res) {
    super.getAll(req, res);
  }

  getNewsById(req, res) {
    super.getById(req, res);
  }

  updateNews(req, res) {
    super.update(req, res);
  }

  deleteNews(req, res) {
    super.delete(req, res);
  }

  addNews(req, res) {
    super.save(req, res);
  }
}

module.exports = NewsController;
