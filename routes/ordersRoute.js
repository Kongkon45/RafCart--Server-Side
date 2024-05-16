const express = require("express");
const { orderCreate } = require("../controllers/ordersController");
const router = express.Router();

router.post("/order", orderCreate)


module.exports = router;