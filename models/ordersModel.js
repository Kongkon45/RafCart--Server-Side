const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required : true
    // },
    // lastName: {
    //     type: String,
    //     required : true
    // },
    // phoneNumber: {
    //     type: String, 
    //     required : true
    // },
    // email: {
    //     type: String,
    //     required : true
    // },
    // address: {
    //     type: String,
    //     required : true
    // },
    // city: {
    //     type: String,
    //     required : true
    // },
    // zipCode: {
    //     type: Number,
    //     required : true
    // },
    // subTotal: {
    //     type: Number,
    //     required : true
    // }
    
    product: {
        type: Object,
        
    },
    paidStatus: {
        type : Boolean
    }, 
    tranjectionId: {
        type : String
    }
})
module.exports = mongoose.model("orders", ordersSchema)