var express = require('express');
const donationsController = require("../controllers/donations.controller");
var router = express.Router();

router.post("/", donationsController.createDonation);
router.get("/bulk", donationsController.getDonationsBulk);
router.put("/:id", donationsController.updateDonation);
router.delete("/:id", donationsController.deleteDonation);

module.exports = router;
