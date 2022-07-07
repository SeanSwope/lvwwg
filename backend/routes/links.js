const express = require("express");

const linksController = require("../controllers/links.controller");

const router = express.Router();

router.post("/", linksController.createLink);
router.get("/bulk", linksController.getLinksBulk);
router.put("/:id", linksController.updateLink);
router.delete("/:id", linksController.deleteLink);
router.get("/categories", linksController.getCategories);

module.exports = router;
