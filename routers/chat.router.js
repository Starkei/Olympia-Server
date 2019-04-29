const router = require("express").Router();
const ChatController = require("../controllers/chats.controller");
const chatController = new ChatController();

router.get("/chat", chatController.getAllChat.bind(chatController));
router.get("/chat/:_id", chatController.getChatById.bind(chatController));
router.put("/chat/:_id", chatController.updateChat.bind(chatController));
router.delete("/chat/:_id", chatController.deleteChat.bind(chatController));
router.post("/chat", chatController.addChat.bind(chatController));

module.exports = router;
