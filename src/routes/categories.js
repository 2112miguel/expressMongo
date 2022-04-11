const express= require('express')

const router=express.Router()

router.get("/:id", (req,res)=>{
    
    const id=req.params.id
    
    res.json({
        message:"Un producto",
        id: `${id}`
    })
    console.log("Id :",id)
})

router.get("/",(req,res)=>{
    console.log("Soy un producto")
    res.json({
        message: "Soy un producto"
    })
})

router.post("/",(req,res)=>{
    const {
        name,
        price
    }=req.body
    res.json({
        message:"producto creado",
        play : {name,price}
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