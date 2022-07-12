const express = require("express");
const marketItemController = require("../controllers/market-item.controller");
var router = express.Router();

router.post("/", marketItemController.createMarketItem);
router.get("/bulk", marketItemController.getMarketItemsBulk);
router.put("/:id", marketItemController.updateMarketItem);
router.delete("/:id", marketItemController.deleteMarketItem);
router.post("/upload", marketItemController.uploadImage);

module.exports = router;
