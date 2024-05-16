const Order = require("../models/ordersModel")
// payment success 
const paymentSuccess = async (req, res) => {
    try {
        console.log(req.params.tranId);
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {paymentSuccess}