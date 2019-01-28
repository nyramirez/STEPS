// this modal is for storing my instructor info for making profile.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorProfile=new Schema({
    register: {
        type: Schema.Types.ObjectId,
        ref: "register"
      },
      driversLicense:{
          type: String,
          required: true,
      },
      qualifications:{
          type: String,
          required: true
      },
      certifications:{
          type: String,
          required:false
      },
      subject: {
          type: String,
          required: true
      },
      subjectInfo:{
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
});

module.exports = InstructorProfile = mongoose.model("instructorProfile", InstructorProfileSchema);