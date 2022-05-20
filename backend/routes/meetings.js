var express = require('express');
const meetingsController = require("../controllers/meetings.controller");
var router = express.Router();

router.post("/", meetingsController.createMeeting);
router.get("/", meetingsController.getMeetings);
router.get("/bulk", meetingsController.getMeetingsBulk);
router.put("/:id", meetingsController.updateMeeting);
router.delete("/:id", meetingsController.deleteMeeting);

module.exports = router;
