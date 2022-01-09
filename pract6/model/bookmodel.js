const mongoose = require("mongoose");

const book_schema = mongoose.Schema({
    book_id:String,
    book_name:String,
    book_cat:[{type:String}],
});

const book_model = mongoose.model("book",book_schema,"book");

module.exports = book_model;
