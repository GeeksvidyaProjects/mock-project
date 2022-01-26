const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const Useremodel = require("./models/User");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://newuser:newuser@socialmedia.emihq.mongodb.net/myhr?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})
.then(data=>console.log("Connected to DB"))
.catch(error=>console.log(error));

app.use("/users",require("./routes/UserApi"));


app.use("/emails",require("./routes/EmailApi"));


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