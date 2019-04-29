const router = require("express").Router();
const TrainingController = require("../controllers/training.controller");
const trainingController = new TrainingController();

router.get(
  "/training",
  trainingController.getAllTraining.bind(trainingController)
);
router.get(
  "/training/:_id",
  trainingController.getTrainingById.bind(trainingController)
);
router.put(
  "/training/:_id",
  trainingController.updateTraining.bind(trainingController)
);
router.delete(
  "/training/:_id",
  trainingController.deleteTraining.bind(trainingController)
);
router.post(
  "/training",
  trainingController.addTraining.bind(trainingController)
);

module.exports = router;
