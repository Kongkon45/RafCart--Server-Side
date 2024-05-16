const express = require("express");
const { paymentSuccess } = require("../controllers/paymentSuccessController");
const router = express.Router();

router.post("/payment/success/:tranId", paymentSuccess)


module.exports = router;