const { ObjectId } = require("mongodb");
const Order = require("../models/ordersModel");
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false //true for live, false for sandbox


// order post/create 
const orderCreate = async (req, res) => {
    try {
        const product = await req.body
        // console.log(req.body);
        // console.log(product);
        const tran_id = new ObjectId().toString();
        const data = {
            total_amount: product?.subTotal,
            currency: 'BDT',
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:5000/payment/success/${tran_id}`,
            fail_url: `http://localhost:5000/payment/fail/${tran_id}`,
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: product?.firstName,
            cus_email: product?.email,
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: product?.phoneNumber,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: product?.address,
            ship_add2: 'Dhaka',
            ship_city: product?.city,
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        console.log(data);
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.send({ url: GatewayPageURL })
                
            const finalOrder = {
                product,
                paidStatus: false,
                tranjectionId: tran_id
            };
            const result = Order.create(finalOrder)

            console.log('Redirecting to: ', GatewayPageURL)
        });
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}




module.exports = { orderCreate};