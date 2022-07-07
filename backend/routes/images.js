var express = require('express');
const imagesController = require("../controllers/images.controller");
var router = express.Router();

router.post("/", imagesController.createImage);
router.get("/bulk", imagesController.getImagesBulk);
router.put("/:id", imagesController.updateImage);
router.delete("/:id", imagesController.deleteImage);
router.post("/upload", imagesController.uploadImage);

module.exports = router;
