const { default: mongoose } = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String,
        required : true
    }

},{timestamps : true})

const userModel = mongoose.model('user',userSchema,'Users');

// export model
module.exports = userModel;