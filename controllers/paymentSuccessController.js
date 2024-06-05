const Order = require("../models/ordersModel")
// payment success 
const paymentSuccess = async (req, res) => {
    try {
        console.log(req.params.tranId);
        const result = await Order.updateOne(
            { tranjectionId: req.params.tranId },
            {
                $set: {
                    paidStatus: true
                }
            }
        );
        if (result.modifiedCount > 0) {
            res.redirect(

                // https://raf-cart-client-side.vercel.app/
                
                `http://localhost:3000/payment/success/${req.params.tranId}`
            )
        }
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {paymentSuccess}