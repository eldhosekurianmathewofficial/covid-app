const express = require("express")
const router = express.Router()
const patientModel = require("../models/patientModel")



router.post("/add",async(req,res)=>{
    let data=req.body
    let mod = new patientModel(data)
    let result=await mod.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let dat=await patientModel.find()
    res.json({
        dat
    })
})
module.exports = router