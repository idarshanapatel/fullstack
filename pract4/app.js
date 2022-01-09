const express = require('express')
const app = express()
const port = 4000
const company = require("./router/company.js");
const product= require("./router/product.js");
const seller = require("./router/seller.js");

app.use("/cmp",company);
app.use("/product",product);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
