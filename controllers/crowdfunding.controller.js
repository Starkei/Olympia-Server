const CrowdfundingModel = require("../models/crowdfunding");
const CRUDController = require("./CRUD.controller");
const types = require("mongoose").Types;

class CrowdfundingController extends CRUDController {

    constructor() {
        super(CrowdfundingModel);
    }

    getAllCrowdfunding(req, res) {
        super.getAll(req, res);
    }

    getCrowdfundingById(req, res) {
        super.getById(req, res);
    }

    updateCrowdfunding(req, res) {
        super.update(req, res);
    }

    deleteCrowdfunding(req, res) {
        super.delete(req, res);
    }

    addCrowdfunding(req, res) {
        super.save(req, res);
    }

}

module.exports = CrowdfundingController;