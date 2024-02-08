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
router.post("/search",async(req,res)=>{
    let input = req.body 
    let data= await patientModel.find(input)
    res.json({
        data
    })

})
module.exports = router