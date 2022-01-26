var nodemailer = require('nodemailer');
const express= require("express");
const router=express.Router();

router.post("/verify", async (req,res) => {
   
    try{
    
     const data={   
         email_id : req.body.email_id, 
         otp :req.body.otp,


         
     };

     console.log(data.otp);

     var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'geeksvidya.associate1@gmail.com',
          pass: 'Kranthi2Neeraj.'
        }
      });
      
      var mailOptions = {
        from: 'geeksvidya.associate@gmail.com',
        to: data.email_id,
        subject: 'Sending Email using Node.js',
        text: data.otp,
        html:"<h2>"+data.otp+" this is </h2>"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


        res.send("sent");
    }catch (err) {
        console.log(err);
    }
    });






module.exports =router;