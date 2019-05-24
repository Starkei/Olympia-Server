const router = require("express").Router();
const AdwareController = require("../controllers/adware.controller");
const adwareController = new AdwareController();

router.get(
    "/adware",
    adwareController.getAllAdware.bind(adwareController)
);
router.get(
    "/adware/:_id",
    adwareController.getAdwareById.bind(adwareController)
);
router.put(
    "/adware/:_id",
    adwareController.updateAdware.bind(adwareController)
);
router.delete(
    "/adware/:_id",
    adwareController.deleteAdware.bind(adwareController)
);
router.post(
    "/adware",
    adwareController.addAdware.bind(adwareController)
);

module.exports = router;