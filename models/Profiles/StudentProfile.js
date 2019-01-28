const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentProfileSchema = new Schema({
  register: {
    type: Schema.Types.ObjectId,
    ref: "register"
  },
  serviceRequest:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = StudentProfile = mongoose.model("studentProfile", StudentProfileSchema);
