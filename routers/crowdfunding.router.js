const router = require("express").Router();
const CrowdfundingController = require("../controllers/crowdfunding.controller");
const crowdfundingController = new CrowdfundingController();

router.get(
  "/crowdfunding",
  crowdfundingController.getAllCrowdfunding.bind(crowdfundingController)
);
router.get(
  "/crowdfunding/:_id",
  crowdfundingController.getCrowdfundingById.bind(crowdfundingController)
);
router.put(
  "/crowdfunding/:_id",
  crowdfundingController.updateCrowdfunding.bind(crowdfundingController)
);
router.delete(
  "/crowdfunding/:_id",
  crowdfundingController.deleteCrowdfunding.bind(crowdfundingController)
);
router.post(
  "/crowdfunding",
  crowdfundingController.addCrowdfunding.bind(crowdfundingController)
);

module.exports = router;
