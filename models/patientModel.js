const mongoose = require("mongoose")
const patientSchema = mongoose.Schema({
    name:String,
    address:String,
    age:String,
    mobile:String,
    symptoms:String,
    CovidStatus:String,

})
module.exports = mongoose.model("covidpatients",patientSchema)
