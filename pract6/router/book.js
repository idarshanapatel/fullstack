const express = require("express");
const router = express.Router();
router.use(express.json());
const book_Model = require("../model/bookmodel");

router.get("/",(req,res) => res.send("Book page"));

//insert data
router.post("/Addbook",(req,res) => {

    const abc = req.body;

    console.log(abc);
    book_Model.create(abc);

    return res.json({data:"data inserted"});

})

//Fetch data
router.get("/getdata" , (req,res) => {

    const bookid = req.body.book_id;

    book_Model.find(async(err,bookdata) => {
        if (err) 
        {
            console.log(err);
        }

         console.log(bookdata);
         return res.json(await {data:bookdata}); 
       
    });
    
});

// deleted Record
router.delete("/RemoveBook/:book_id" , (req,res) => {

    const bookid = req.params.book_id;

    book_Model.findOneAndDelete({book_id:bookid},(err)=> {

        if(err) console.log(err);

        console.log("data deleted");

        return res.json({data:"deleted"});
    });

});

//update records

router.put("/updatebook/:book_id", async(req,res) => {

    const bookid = req.params.book_id;

    const updatedata = req.body;

    const datatoupdate = await book_Model.findOneAndUpdate({book_id:bookid}, updatedata , {upsert:true});
          console.log("updated");
          return res.json({data:"updated"});
});

module.exports = router;
