//this model is for my instructor/student registration

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema=new Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName:{
          type: String,
          required:true
      },
      email: {
        type: String,
        required: true
      },
      phoneNumber:{
          type: Number,
          required: true
      },
      zipCode:{
        type:Number,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      userTitle:{
          type: String,
          required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    });
    module.exports = Register = mongoose.model("register", registerSchema);