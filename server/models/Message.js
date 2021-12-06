const mongoose = require("mongoose");


const mssg = new mongoose.Schema({
    chatId : {
        type: String,
        required: true,
    },
    message : {
        type: Object,
        required: true,
    },
    lastUpdate:{
        type: Date,
        default:Date.now(),
    }
});


const mssgmodel = mongoose.model("chat",mssg);
module.exports = mssgmodel;
