const express= require('express')
const product= require("../usercases/products")

const router=express.Router()

router.get("/:id", (req,res)=>{
    
    const id=req.params.id
    
    res.json({
        message:"Un producto",
       
        
    })
    console.log("Id :",id)
})

router.get("/", async(req,res)=>{
    //const producto = await product.get()
    const products= await product.get()
    console.log("Soy un producto")
    res.json({
        message: "Soy un producto Creado",
        playload: products
    })
})

router.post("/",async(req,res)=>{
    
    const {
        name,
        price,
        description,
        img
    }=req.body
    const productCreated= await product.create({
        name,
        price,
        description,
        img
    })
    res.json({
        success: true,
        message:"Producto creado",
        playload: productCreated
    })
})

router.put("/:id",(req,res)=>{
    const {id}= req.params
    const {name,price}=req.body
    res.json({
        message:`Producto ${id}`,
        playload: {name,price}
    })
})

router.delete("./id",(req,res)=>{
    
})

module.exports=router