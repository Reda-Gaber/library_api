const router = require("express").Router();
const apiController = require("../../controllers/books.controller");

router.get("/", apiController.apiBooks);

module.exports = router;
