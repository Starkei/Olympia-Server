const router = require("express").Router();
const ChatController = require("../controllers/chats.controller");
const chatController = new ChatController();

router.get("/chats", chatController.getAllChat.bind(chatController));
router.get("/chats/:_id", chatController.getChatById.bind(chatController));
router.put("/chats/:_id", chatController.updateChat.bind(chatController));
router.delete("/chat/:_id", chatController.deleteChat.bind(chatController));
router.post("/chats", chatController.addChat.bind(chatController));

module.exports = router;
