const router = require("express").Router();
const EventController = require("../controllers/event.controller");
const eventController = new EventController();

router.get("/events", eventController.getAllEvents.bind(eventController));
router.get("/events/:_id", eventController.getEventById.bind(eventController));
router.put("/events/:_id", eventController.updateEvent.bind(eventController));
router.delete(
  "/events/:_id",
  eventController.deleteEvent.bind(eventController)
);
router.post("/events", eventController.addEvent.bind(eventController));

module.exports = router;
