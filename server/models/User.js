const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    full_name : {
        type: String,
        required: true,
    },
    email_id : {
        type: String,
        unique:true,
        required: true,
    },
    mobile_no :{
        type: String,
        default:null
        
    },
    password : {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        default:null
        
    },
   course : {
        type: String,
        default:null
        
    },
    clg_name : {
        type: String,
        default:null
        
    },
    clg_reg_no: {
        type: String,
        default:null
        
    },
    image : {
        type: String,
        default:null
    },
    lastUpdate:{
        type: Date,
        default:Date.now(),
    }
});


const User = mongoose.model("user",UserSchema);
module.exports = User;
 