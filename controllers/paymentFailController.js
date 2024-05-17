const Order = require("../models/ordersModel");


const paymentFail = async (req, res) => {
    try {
        console.log(req.params.tranId);
        const result = await Order.deleteOne(
            { tranjectionId: req.params.tranId }
        );
        if (result.deletedCount) {
            res.redirect(
                `https://vercel.com/kongkon-jowarders-projects/raf-cart-server-side/payment/fail/${req.params.tranId}`
            )
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {paymentFail}