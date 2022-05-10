const express= require('express')
const category= require('../usercases/categories')

const router=express.Router()

router.get("/:id", async(req,res,next)=>{
    try {
        const {id} = req.params
        const retrievedCategory = await category.getById(id)
        res.json({
            success: true,
            playload: retrievedCategory
        })
    } catch (error) {
        next(error)
    }
})

router.get("/",async(req,res,next)=>{
    try {
        const categories = await category.getAll()
        res.json({
            success: true,
            playload: categories
        })
    } catch (error) {
        next(error)
    }
})

router.post("/", async(req,res,next)=>{
    try {
        const {name}=req.body
        console.log(req.body)
        const createdCategory = await category.create(name)
        res.json({
            success: true,
            message:"producto creado",
            playload : createdCategory
        })
    } catch (error) {
        next(error)
    }
})

router.put("/:id",async(req,res,next)=>{
    try {
        const {id} = req.params
        const {name} = req.body
        
        const updatedCategory = await category.update(id,name)

        res.json({
            success: true,
            message: "Categoria actialida",
            playload: updatedCategory
        })
    } catch (error) {
        next(error)
    }
})

router.delete("./id",async(req,res,next)=>{
    try {
        const {id} = req.params
        const delCategory = await category.del(id)
        
        res.json({
            success: true,
            message: "Categoria eliminada",
            playload: delCategory
        })
    } catch (error) {
        next(error)
    }
})

module.exports=router