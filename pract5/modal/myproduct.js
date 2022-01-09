const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

product_id: String,
title: String,
price: String,
category: [{type:String}],
company_id : String,
seller_id : [{type:String}],

});

const productmodel = mongoose.model("Product",productSchema,"Product");

module.exports = productmodel;
