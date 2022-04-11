const express= require('express')

const router=express.Router()

let usr,pswd

router.get("/:id", (req,res)=>{
    
    const id=req.params.id
    
    res.json({
        message:"Un usuario",
        id: `${id}`,
        usr: usr,
        pswd: pswd
    })
    console.log("Id :",id)
})

router.get("/",(req,res)=>{
    console.log("Soy un usuario")
    res.json({
        message: "Soy un usuario"
    })
})

router.post("/",(req,res)=>{
   usr= req.body.usr
   pswd=req.body.password
    res.json({
        message:"Usuario creado",
        usr : `${usr}`,
        pswd: pswd
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