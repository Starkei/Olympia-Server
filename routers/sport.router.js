const router = require("express").Router();
const SportController = require("../controllers/sport.controller");
const sportController = new SportController();

router.get("/sports", sportController.getAllSports.bind(sportController));
router.get("/sports/:_id", sportController.getSportById.bind(sportController));
router.put("/sports/:_id", sportController.updateSport.bind(sportController));
router.delete("/sports/:_id", sportController.deleteSport.bind(sportController));
router.post("/sports", sportController.addSport.bind(sportController));

module.exports = router;