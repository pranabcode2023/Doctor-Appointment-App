const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    firstName: {
      type: String,
      required: [true, "First Name is Required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone No. is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
    },
    specialization: {
      type: String,
      required: [true, "Specialization is Required"],
    },
    experience: {
      type: String,
      required: [true, "Experience is Required"],
    },
    consultationFee: {
      type: Number,
      required: [true, "Consultation Fee is Required"],
    },

    officeTime: {
      type: Object,
      required: [true, " Office Time is Required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("users", doctorSchema);

module.exports = doctorModel;
