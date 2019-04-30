const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const userController = new UserController();

router.get("/user", userController.getAllUser.bind(userController));
router.get("/user/:_id", userController.getUserById.bind(userController));
router.put("/user/:_id", userController.updateUser.bind(userController));
router.delete("/user/:_id", userController.deleteUser.bind(userController));
router.post("/user", userController.addUser.bind(userController));

module.exports = router;
