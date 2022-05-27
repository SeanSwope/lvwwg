var express = require('express');
const membersController = require("../controllers/members.controller");
var router = express.Router();

router.post("/", membersController.createMember);
router.get("/bulk", membersController.getMembersBulk);
router.put("/:id", membersController.updateMember);
router.delete("/:id", membersController.deleteMember);

module.exports = router;
