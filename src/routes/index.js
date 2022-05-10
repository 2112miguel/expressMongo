const productsRouter = require("./products")
const categoriesRouters= require("./categories")
const usersRouters= require("./users")
const authRouter = require("./auth")
const apiRouter = (app)=>{
    app.use("/products",productsRouter)
    app.use("/users",usersRouters)
    app.use("/categories",categoriesRouters)
    app.use("/auth",authRouter)
}

module.exports=apiRouter