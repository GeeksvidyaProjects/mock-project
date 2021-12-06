const express= require("express");
const router=express.Router();
const Useremodel = require("../models/User");


router.post("/register", async (req,res) => {
    const data={
        full_name : req.body.full_name,
        email_id : req.body.email_id,
         mobile_no : req.body.mobile_no,
        password :req.body.password,
        image : req.body.image,
        degree : req.body.degree,
        course : req.body.course,
        clg_reg_no : req.body.clg_reg_no,
        clg_name:req.body.clg_name
    };
    
    const user = new Useremodel(data);
    console.log("yes");
    try{
        await user.save();
        res.send("registered data");
    }catch (err) {
        console.log(err);
    }

});

module.exports =router;