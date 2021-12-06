const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    full_name : {
        type: String,
        required: true,
    },
    email_id : {
        type: String,
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
    image : {
        type: String,
        required: true,
    },
    friendsList :{
            type: Object,
            required: true,
            
    }
});


const User = mongoose.model("user",UserSchema);
module.exports = User;
