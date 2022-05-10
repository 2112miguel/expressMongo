const express= require('express')
const app = express()
const port = 8000
const apiRouter = require("./src/routes")
const {errorHandler, logErrors} = require("./src/middlewares/errorHandler")
const {authHandler} = require('./src/middlewares/authHandlers')
const db = require("./src/lib/db")
app.use(express.json())
//app.use(authHandler)
apiRouter(app)
app.listen(port,()=>{
    console.log("listening on port 8000")
    db.connect()
    .then(()=>{
        console.log("DB connected")
    })
    .catch((err)=>{
        console.log("Error",err)
    })
})

//import router from './src/routes/products.js'

//productsRouter=require("./src/routes/products.js")

//app.use("/products",productsRouter)

/*
app.post("/products",productsRouter)=>{

    console.log(req.body)
    res.json({
        message:"Obj create",
        success:true,
        playload: req.body,
        process: req.body.age
    })
})

app.get("/",(req,res)=>{
    
    console.log("query ",req.query)
    res.json({
        message: "Hello word",
        status: "ok",
        data: {
            name:"Miguel",
            query: req.query

        }
    })
   // res.send("<h2>Hello world</h2>")
})

app.listen(port,()=>{
    console.log("Listening port 8000")
})*/
