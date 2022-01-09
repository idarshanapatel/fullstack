const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
    seller_id : String,
    name : String,
    product_id : [{type:String}],
});

const sellermodel = mongoose.model("Seller",sellerSchema,"Seller");

module.exports = sellermodel;
