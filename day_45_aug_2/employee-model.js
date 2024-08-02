const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    eId: { type: Number },
    name: { type: String },
    sal: { type: Number },
    gender: { type: String }
})
let employeeModel = mongoose.model("employees", employeeSchema);
module.exports = employeeModel;