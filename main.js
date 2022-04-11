const express= require('express')
const app = express()
const port = 8000
const apiRouter = require("./src/routes")


app.use(express.json())
apiRouter(app)
app.listen(port,()=>{
    console.log("listening on port 8000")
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
