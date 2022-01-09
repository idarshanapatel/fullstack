const express = require('express')
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const book_detail = require("./router/bookdetail.js");
const book = require("./router/book");

mongoose.connect("mongodb+srv://devsagar:dev123@book.a7lnb.mongodb.net/bookdatabase?retryWrites=true&w=majority");

app.use("/bookdetail",book_detail);
app.use("/book",book);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
