const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const Useremodel = require("./models/User");
const mssgmodel=require("./models/Message");

app.use(express.json());
app.use(cors());
// mongoose.connect("mongodb+srv://newuser:newuser@socialmedia.emihq.mongodb.net/socialmedia?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
// })
// .then(data=>console.log("Connected to DB"))
// .catch(error=>console.log(error));
mongoose.connect("mongodb+srv://newuser:newuser@socialmedia.emihq.mongodb.net/myhr?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})
.then(data=>console.log("Connected to DB"))
.catch(error=>console.log(error));


app.post("/insert", async (req,res) => {
    const full_name = req.body.full_name;
    const email_id = req.body.email_id;
    const mobile_no = req.body.mobile_no;
    const password = req.body.password;
    const image = req.body.image;
    const friendsList = req.body.friendsList
    const user = new Useremodel({full_name : full_name,email_id : email_id,mobile_no : mobile_no,password : password,image : image, friendsList : friendsList});
    console.log("yes");
    try{
        await user.save();
        res.send("inserted data");
    }catch (err) {
        console.log(err);
    }

});

app.get("/readUserdata", async (req,res) => {
    
    Useremodel.find({},(err,result)=> {
          if(err)
          {
              console.log(err);
          }
          else{
              res.send(result)
          }
    })
 

});

app.post("/sendmssg", async (req,res) => {
    const chatId = req.body.chatId;
    const message = req.body.message;
    const lastUpdate = req.body.lastUpdate;
    const mssgmode = new mssgmodel({chatId :chatId, message : message, lastUpdate :lastUpdate });
    console.log("yes");
    try{
        await mssgmode.save();
        res.send("inserted data"); 
    }catch (err) {
        console.log(err);
    }

});





app.listen(3001, () => {
    console.log("Server running on port 3001...");
});