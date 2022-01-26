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



router.post("/Login", async (req,res) => {
   
   try{
    const data={   
        email_id : req.body.email_id, 
        password :req.body.password
    };
    const rs=await Useremodel.findOne(data);
    if(rs){
        var result={
            'status':200,
            'message':'Success',
            'data':rs
        }
        res.send(result);


    }else{

        var result={
            'status':400,
            'message':'UnSuccess'
        }
        res.send(result);

    }
    

   }catch(error){
    
    var result={
        'status':500,
        'message':'internal_error',
    }
    res.send(result);
   } 
    

  

});



router.post("/updatepass", async (req,res) => {
   
    try{
     const data={   
         email_id : req.body.email_id, 
         password :req.body.password
     };

     const dat={
         email_id :data.email_id
     }

     const updat={
        password:data.password
     }
     let rs=await Useremodel.findOneAndUpdate(dat,updat,{ new: true }
        );
     if(rs){
         var result={
             'status':200,
             'message':'Success',
             'data':rs
         }
         res.send(result);
 
 
     }else{
 
         var result={
             'status':400,
             'message':'UnSuccess'
         }
         res.send(result);
 
     }
     
 
    }catch(error){
     
     var result={
         'status':500,
         'message':'internal_error',
     }
     res.send(result);
    } 
     
 
   
 
 });

router.post("/exists", async (req,res) => {
   
    try{
        const data={   
            email_id : req.body.email_id           
        };
        const rs=await Useremodel.findOne(data);

        //res.send(rs);
        if(rs){

            const result={
                "status":400,
                "Message":"User already exists"
            }
           res.send(result);
            
        }else{
            const result={
                "status":200,
                "Message":"User not exists"
            }
           res.send(result);
        }
    
       }catch(error){
        
        const result={
            "status":400,
            "Message":"internal server error"
        }
       res.send(result);
       } 
    });

router.post("/signup", async (req,res) => {
   
    try{
     const data={   
         email_id : req.body.email_id, 
         password :req.body.password,
         full_name:req.body.name
     };
     const user = new Useremodel(data);

    
        await user.save();
        const result={
            "status":200,
            "Message":"User registered sucssesfully"
        }
       res.status(200).json(result);
        
    }catch (err) {
        console.log("---------")
        console.log(err.code);

        if(err.code===11000){
            const result={
                "status":400,
                "Message":"User already exists"
            }
           res.status(200).json(result);
        }else{
            const result={
                "status":400,
                "Message":"User registration unsucsessfull"
            }
           res.send(result);
        }
        
    }
    });


module.exports =router;

    