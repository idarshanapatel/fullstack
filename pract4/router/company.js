const express = require("express");
const router = express.Router();
router.use(express.json());
const cmp = require("../companydetail.js")
router.get("/",(req,res)=> res.send("company page"));

router.post("/addcmp",(req,res) => {
   const cmplist = req.body;
   cmp.push(cmplist);
   res.json({data:cmp});
});

router.post("/fetch",(req,res)=> {
   res.json({data:cmp});
});

router.post("/dlt",(req,res)=> {
   const dltdata = req.body;
   prod.pop(dltdata);
   res.json({data:cmp});
});  

router.post("/updatecmp",(req,res)=> {
   const cmplist = req.body;
   cmp[1]=cmplist;
   res.json({data:cmp});
});

module.exports = router;
