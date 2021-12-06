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
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
   course : {
        type: String,
        required: true,
    },
    clg_name : {
        type: String,
        required: true,
    },
    clg_reg_no: {
        type: String,
        required: true,
    },
    image : {
        type: String
    },
    lastUpdate:{
        type: Date,
        default:Date.now(),
    }
});


const User = mongoose.model("user",UserSchema);
module.exports = User;
