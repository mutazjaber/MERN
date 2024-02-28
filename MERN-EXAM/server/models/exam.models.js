
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"name is required"],
    minlength: [2, "name must be 2 characters in length"],
    maxlength:[20, "name must be 20 characters in length"],
  },
  age: {
    type: Number,
    required: [true, "number is required"],
  },
  symptoms: {
    type: String,
    required:[true, "symptoms is required"],
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
