const sportModel = require("../models/sport");
const CRUDController = require("./CRUD.controller");

class SportController extends CRUDController {

    constructor() {
        super(sportModel);
    }

    addSport(req, res) {
        return super.save(req, res);
    }

    getAllSports(req, res) {
        return super.getAll(req, res);
    }

    getSportById(req, res) {
        return super.getById(req, res);
    }

    updateSport(req, res) {
        return super.update(req, res);
    }

    deleteSport(req, res) {
        return super.delete(req, res);
    }
}

module.exports = SportController;