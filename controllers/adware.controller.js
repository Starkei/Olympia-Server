const AdwareModel = require("../models/adware");
const CRUDController = require("./CRUD.controller");

class AdwareController extends CRUDController {

    constructor() {
        super(AdwareModel);
    }

    getAllAdware(req, res) {
        super.getAll(req, res);
    }

    getAdwareById(req, res) {
        super.getById(req, res);
    }

    updateAdware(req, res) {
        super.update(req, res);
    }

    deleteAdware(req, res) {
        super.delete(req, res);
    }

    addAdware(req, res) {
        super.save(req, res);
    }

}

module.exports = AdwareController;