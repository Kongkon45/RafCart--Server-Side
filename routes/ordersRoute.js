const express = require("express");
const { orderCreate, getAllOrder } = require("../controllers/ordersController");
const router = express.Router();

router.get ("/order", getAllOrder);
router.post("/order", orderCreate);



module.exports = router;