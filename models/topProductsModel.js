const mongoose = require('mongoose');

const topProductsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    rating : {
        type : Number, 
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    category : {
        type : String, 
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.model("topProducts", topProductsSchema)