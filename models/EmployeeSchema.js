const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employee_name: {
    type: String,
    required: true
  },
  employee_role: {
    type: String,
    isIn: ['Manager','Admin','Developer'],
    defaultsTo: 'Developer'
    },
    employee_company: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("EmployeeSchema", EmployeeSchema);