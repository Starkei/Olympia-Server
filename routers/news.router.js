const router = require("express").Router();
const NewsController = require("../controllers/news.controller");
const newsController = new NewsController();

router.get("/news", newsController.getAllNews.bind(newsController));
router.get("/news/:_id", newsController.getNewsById.bind(newsController));
router.put("/news/:_id", newsController.updateNews.bind(newsController));
router.delete("/news/:_id", newsController.deleteNews.bind(newsController));
router.post("/news", newsController.addNews.bind(newsController));

module.exports = router;
