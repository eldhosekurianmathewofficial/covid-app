const express =require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const coviddata = require("./controllers/patientdata")

const exp = express()

exp.use(express.json())
exp.use(cors())

mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/covidDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
exp.use("/api/covidapp",coviddata)
exp.listen(3001,()=>{
    console.log("Server Running")
})