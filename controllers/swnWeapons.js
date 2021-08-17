const SWNWeapon = require('../models/swnWeapon')
const {Router} = require('express')
const router = Router()

// index 
router.get("/", async (req, res) => {
    try{
        const weapons = await SWNWeapon.find({})
        res.json({
            status: 200,
            data: weapons
        }) 
    }catch(err){
        res.status(400).json(err)
    }
})
// show
router.get("/:id", async (req, res) => {
    try{
        const weapon = await SWNWeapon.findById(req.params.id)
        res.json({
            status: 200,
            data: weapon
        }) 
    }catch(err){
        res.status(400).json(err)
    }
})
// create
router.post("/", async(req,res) => {
    try{
        const newWeapon = await SWNWeapon.create(req.body)
        res.json({
            status: 200,
            data: newWeapon
        })
    }catch(err){
        res.status(400).json(err)
    }
})
// update
router.put("/:id", async (req, res) => {
    try{
        const updated = await SWNWeapon.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({
            status: 200,
            data: updated
        }) 
    }catch(err){
        res.status(400).json(err)
    }
})
// destroy
router.delete("/:id", async (req, res) => {
    try{
        const deleted = await SWNWeapon.findByIdAndDelete(req.params.id)
        res.json({
            status: 200,
            data: deleted
        }) 
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router