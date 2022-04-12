const express= require('express')
const usr= require("../usercases/users")

const router=express.Router()

router.get("/:id", async(req,res)=>{
    const users= await usr.get()
    console.log("Usr display")
    res.json({
        message: "Usuario",
        playload: users
    })
})

router.get("/",(req,res)=>{
    console.log("Soy un usuario")
    res.json({
        message: "Soy un usuario"
    })
})

router.post("/", async(req,res)=>{
   const {
    name,
    pswd,
    img
   }=req.body
   const usrCreated= await usr.create({
       name,
       pswd,
       img
   })
   res.json({
       message:"Usr creado",
       playload: usrCreated
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