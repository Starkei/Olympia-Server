const types = require("mongoose").Types;

class CRUDController {
    constructor(model) {
        this.model = model;
    }

    getAll(req, res) {
        this.model.find((err, data) => {
            if (err) res.status(404).send(err);
            else
                res.status(200).send(data);
        });
    }

    getById(req, res) {
        let _id = req.params._id;
        this.model.findOne({
            _id
        }, (err, data) => {
            if (err) res.status(404).send(err);
            else
                res.status(200).send(data);
        });
    }

    update(req, res) {
        let _id = req.params._id;
        let data = res.body;
        this.model.findOneAndUpdate({
            _id
        }, data, (err, data) => {
            if (err) res.status(404).send(err);
            else
                res.send(data);
        });
    }

    delete(req, res) {
        let _id = req.params._id;
        this.model.deleteOne({
            _id
        }, (err) => {
            if (err) res.status(404).send(err);
            else
                res.sendStatus(200);
        });
    }

    save(req, res) {
        let data = new this.model(req.body);
        if (!data._id)
            data._id = types.ObjectId();
        data.save();
        res.status(200).send(data);
    }
}

module.exports = CRUDController;