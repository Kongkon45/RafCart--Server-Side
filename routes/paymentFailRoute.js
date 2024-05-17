const express = require("express");
const { paymentFail } = require("../controllers/paymentFailController");
const router = express.Router();

router.post("/payment/fail/:tranId", paymentFail)

module.exports = router;